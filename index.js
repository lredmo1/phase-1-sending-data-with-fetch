// Add your code here
//why do the function calls inside the functions need the parameters? 

function formDataObject(userName, userEmail) {
    return {
        name: userName,
        email: userEmail
    }
}



function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(formDataObject(userName, userEmail))
    })
        .then(resp => resp.json())
        .then(objectResponse => {
            let newID = objectResponse.id
            const newIDNumber = document.createElement('p')
            newIDNumber.textContent = newID
            let bodyTag = document.querySelector('body')
            bodyTag.appendChild(newIDNumber)

        })
        .catch(message => {
            let bodyTag = document.querySelector('body')
            bodyTag.append(message)

        })
}

submitData("test", "test@email.com")

// function formDataObject(userName, userEmail) {
//     return {
//         name: userName,
//         email: userEmail
//     }
// }

// function functionObjectThing(userName, userEmail) {
//     return {
//         method: 'POST',
//         headers: {
//             'Content-Type': "application/json",
//             Accept: "application/json"
//         },
//         body: JSON.stringify(formDataObject(userName, userEmail))
//     }
// }

// function submitData(userName, userEmail) {
//     return fetch("http://localhost:3000/users", functionObjectThing(userName, userEmail))
//         .then(resp => resp.json())
//         .then(objectResponse => {
//             let newID = objectResponse.id
//             const newIDNumber = document.createElement('p')
//             newIDNumber.textContent = newID
//             let bodyTag = document.querySelector('body')
//             bodyTag.appendChild(newIDNumber)

//         })
//         .catch(message => {
//             let bodyTag = document.querySelector('body')
//             bodyTag.append(message)

//         })
// }

// submitData()