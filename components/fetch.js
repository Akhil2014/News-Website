

let searchNews = async (q) => {
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${q}`)
    let data = res.json();
    return data;
}

let append = (data,container) => {
    data.forEach(({author,description,urlToImage}) => {
        let box = document.createElement("div")
        box.setAttribute("id","box")
        let img = document.createElement("img")
        img.src = urlToImage;
        let p = document.createElement("p")
        p.innerText = description;
        let h3 = document.createElement("h3")
        h3.innerText = author;

        box.append(img,p,h3)
        container.append(box)

    })
}

export {searchNews,append};