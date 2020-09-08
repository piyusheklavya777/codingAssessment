export function fetchAndShowData() {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url = `https://localhost:3000/products`
    fetch("http://localhost:3000/products")
        //fetch( `http://workshops-server.herokuapp.com/workshops` )
        //fetch(proxyurl+url)
        .then(function (response) {
        return response.json();
    })
        .then(function (dataArray) {
        console.log(dataArray);
        var tbody = document.querySelector('tbody');
        // go through workshops array and form HTML within tbody
        dataArray.forEach(function (dataEach) {
            tbody.innerHTML += "<tr>\n                    <td>\n                        <img src=\"" + dataEach.imageUrl + "\" style=\"width: 200px;\" />\n                    </td>\n                    <td>" + dataEach.name + "</td>\n                    <td>" + dataEach.location.city + "</td>\n                </tr>";
        });
    })
        .catch(function (error) {
        console.log(error.message);
    });
}
