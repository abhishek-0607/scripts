
async function shownews(){
    let res = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=396c5457c306470294820130bdaebee5`);
    let data = await res.json();
    console.log(data.articles);
    appendnews(data.articles);
}
shownews();
let container = document.getElementById("container")
function appendnews(news){
        container.innerHTML = null;
        news.forEach(function(article){
            let item = document.createElement("div");
            item.className = "news";
            let image = document.createElement("img");
            image.src = article.urlToImage;
            let heading = document.createElement("h2");
            heading.innerText = article.title;
            let desc = document.createElement("p");
            let sourse = document.createElement("a");
            sourse.href = "news.html";
            sourse.innerText = "full story";
            desc.innerText= article.description;
            item.append(image,sourse,heading,desc,);
            container.append(item);          
    })
}
async function searchnews(anything){
    let res = await fetch(`https://newsapi.org/v2/everything?q=${anything}&from=2021-10-18&sortBy=popularity&apiKey=396c5457c306470294820130bdaebee5`)
    let data = await res.json();
    console.log(data);
    appendnews(data.articles);
}