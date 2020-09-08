export function fetchAndShowData() {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url = `https://localhost:3000/products`
    fetch("localhost:4201/articles/")
        .then(function (response) {
        return response.json();
    })
        .then(function (dataArray) {
        console.log(dataArray);
        var tbody = document.querySelector('tbody');
        // go through workshops array and form HTML within tbody
        dataArray.forEach(function (dataEach) {
            // tbody.innerHTML += `<tr>
            //     <td>
            //         <img src="${dataEach.imageUrl}" style="width: 200px;" />
            //     </td>
            //     <td>${dataEach.name}</td>
            //     <td>${dataEach.location.city}</td>
            // </tr>`;
        });
    })
        .catch(function (error) {
        console.log(error.message);
    });
}
