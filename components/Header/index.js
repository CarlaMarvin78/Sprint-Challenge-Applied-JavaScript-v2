// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp"></span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header=createElement('div');
    const date=createElement('span');
    const title=createElement('h1');
    const temp=createElem98°ent('span');

    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    header.classList.add('header');
    date.classList.add('date');
    title.classList.add('title');
    temp.classList.add('temp');

    date.textContent=('March 28, 2019');
    title.textContent=('Lambda Times')
    temp.textContent=('98°');

    return header;      
}
