const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000; // Replace with your desired port number

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Sample exercises data (replace with your actual exercises)
const exercises = [
    { question: 'Translate "Hello" to Spanish', answer: 'Hola' },
    { question: 'Translate "Goodbye" to French', answer: 'Au revoir' },
    // Add more exercises here
];

// Route to fetch exercises
app.get('/exercises', (req, res) => {
    res.json(exercises);
});

// Route to submit answers
app.post('/submit', (req, res) => {
    const userAnswer = req.body.answer; // Assuming the answer is sent in the request body

    // Check the answer (simplified, replace with your own logic)
    const exercise = exercises.find((exercise) => exercise.answer === userAnswer);

    if (exercise) {
        res.json({ correct: true, message: 'Correct answer!' });
    } else {
        res.json({ correct: false, message: 'Incorrect answer. Try again.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
