document.addEventListener('DOMContentLoaded',()=>{
    const fetchButton=document.getElementById('fetchExercises');
    const exerciseList=document.getElementById('exerciseList');



    fetchButton.addEventListener('click',()=>{
        fetch('/exercises')
        .then((response)=>{
            if(!response.ok){//It checks if the response status is "ok" (HTTP status code 200) using response.ok. If the status is not "ok," it throws an error.
                throw new Error('Response not ok');
            }
            return response.json();
        })
        .then((data)=>{
            displayExercises(data);//handles the data received from backend
                })
        .catch((error)=>{
            console.error('There was a problem with the fetch operation',error);
        });

    });
function displayExercises(exercises){
    exerciseList.innerHTML='';
    exerciseList.forEach((exercise)=>{
        const exerciseItem=document.createElement('li');
exerciseItem.textContent=exercise.question;
exerciseList.appendChild(exerciseItem);
    });
}});