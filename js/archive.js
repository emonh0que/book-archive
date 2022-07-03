const search = () => {
    const searchText = document.getElementById('input-field').value;
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => display(data))
}



const display = data => {
    const container = document.getElementById('all-container');
    container.textContent = '';
    data.docs.forEach(info => {
        const div = document.createElement('div');
        div.classList.add('bg-white');
        div.classList.add('p-2');
        div.classList.add('m-4');
        div.classList.add('flex');
        div.classList.add('gap-4');
        div.classList.add('justify-between');
        div.classList.add('w-2/4');
        const book = info.subtitle? info.subtitle : info.title;
        const author = info.author_name[0];
        const author2 = info.author_name[1];

        const firstPublished = info.first_publish_year;
        const cover = info.cover_i;
        let coverImg = `https://covers.openlibrary.org/b/id/${cover}-M.jpg`;
        if(cover == undefined) {
            coverImg = `https://cdn.pixabay.com/photo/2017/01/31/00/08/book-2022461_960_720.png`;
        } ; 
        
        
        
        div.innerHTML = `


        <div>
            <img width="200" src="${coverImg}" alt="">
        </div>
        <div>
            <h3 class="text-3xl my-2">${book}</h3>
            <p>By ${author} ${author2? + ' and ' + author2 : ''}</p>
            <small>First publish in ${firstPublished}</small>
        </div>
        
        `
        container.appendChild(div);


    })
}
