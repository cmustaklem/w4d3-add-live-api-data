fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board games') + '&includes=Images,Shop'))

.then(response => response.json()) //response.json parses the data
// .then(response => listPlanets(response.results))
.then(function(items){
    console.log(items)
    items.results.forEach(function(item){
        var col = document.createElement('div')
        col.className = 'col-sm-3'

        var card = document.createElement('div')
        card.className = 'card'
        col.appendChild(card)

        var img = document.createElement('img')
        img.setAttribute('src', item.Images[0].url_fullxfull)
        img.className = 'previewImage'
        card.appendChild(img)

        var span = document.createElement('span')
        span.innerHTML = item.title
        card.appendChild(span)

        var row = document.createElement('div')
        row.className = 'row'
        card.appendChild(row)

        var colLeft = document.createElement('div')
        // colLeft.setAttribute(item.Shop.shop_name)
        colLeft.className = 'col-xs-6 text-muted itemSeller'
        colLeft.innerHTML = item.Shop.shop_name
        row.appendChild(colLeft)

        var colRight = document.createElement('div')
        colRight.className = 'col-xs-6 text-right text-success'
        colRight.innerHTML = '$' + item.price
        row.appendChild(colRight)

        document.querySelector('#searchResults').appendChild(col)
    })
})

// function createResultCard(item) {
//     var col = document.createElement('div')
//     col.className = 'col-sm-3'
//
//     var card = document.createElement('div')
//     card.className = 'card'
//     col.appendChild(card)
//
//     var img = document.createElement('img')
//     img.setAttribute('src', item.image)
//     card.appendChild(img)
//
//     var span = document.createElement('span')
//     span.innerHTML = item.title
//     card.appendChild(span)
//
//     var row = document.createElement('div')
//     row.className = 'row'
//     card.appendChild(row)
//
//     var colLeft = document.createElement('div')
//     colLeft.className = 'col-xs-6 text-muted itemSeller'
//     colLeft.innerHTML = item.seller
//     row.appendChild(colLeft)
//
//     var colRight = document.createElement('div')
//     colRight.className = 'col-xs-6 text-right text-success'
//     colRight.innerHTML = item.price
//     row.appendChild(colRight)
//
//     document.querySelector('#searchResults').appendChild(col)
// }

// function makeRandomAmount() {
//     return '$' + Math.round(Math.random() * 100) + '.00'
// }
//
// var items = [
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
// ]
//
// console.log(items)
//
// function makeCards(cardItems) {
//     document.querySelector('#searchResults').innerHTML = ''
//
//     cardItems.forEach(function(item, i) {
//         // item.title += i
//         // item.image += i
//         // item.seller += i
//         createResultCard(item)
//     })
// }
