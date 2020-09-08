import datainterface from '../models/datainterface';
const datatrial = require('.../data.json')

// export function fetchAndShowData() {
//    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
//    // const url = `https://localhost:3000/products`
//      //fetch( `localhost:4201/articles/` )
//     fetch(datatrial)
//         .then(function( response : Response ) {
//             return response.json();
//         })
//         .then(function( dataArray : datainterface[] ) {
//             console.log( dataArray);
            
//             const tbody = <HTMLElement> document.querySelector( 'tbody' );
            
//             // go through workshops array and form HTML within tbody
//             dataArray.forEach(function( dataEach ) {
//                 // tbody.innerHTML += `<tr>
//                 //     <td>
//                 //         <img src="${dataEach.imageUrl}" style="width: 200px;" />
//                 //     </td>
//                 //     <td>${dataEach.name}</td>
//                 //     <td>${dataEach.location.city}</td>
//                 // </tr>`;
//             });
//         })
//         .catch(function( error ) {
//             console.log( error.message );
//         });
// }

export function fetchAndShowData(datatrial : any[]) {

    const editit = <HTMLElement> document.querySelector( 'editit' );
    datatrial.forEach(function(data) {
       editit+=  <div class="col-sm">

     <h1>${data.title}</h1>
     <p>${data.body}</p>

     </div>
    })

}