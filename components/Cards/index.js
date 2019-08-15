// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.





function createCard(data){
    const card=document.createElement('div')
    const headline=document.createElement('div');
    const author=document.createElement('div');
    const imgContainer=document.createElement('div');
    const img=document.createElement('img');
    const span=document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('headline');
    imgContainer.classList.add('img-container');
    img.classList.add('img');
    span.classList.add('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(span);

    headline.textContent=data.headline;
    img.setAttribute('src', data.authorPhoto);
    span.textContent=`By ${data.authorName}`;

return card;
}
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(data=> { 
    const articles=data.data.articles;
    const container=document.querySelector('.cards-container');
    Object.keys(articles).forEach(topic=>{
     articles[topic].forEach(article=>{
        container.appendChild(createCard(article));
     });
    });
})
.catch(error => console.log('Error: ', error));
