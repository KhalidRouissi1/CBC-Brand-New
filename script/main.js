let copyright = document.querySelector(".copyright");

function addYearOfCopyRight() {
  let date = new Date();

  copyright.innerHTML = `${date.getFullYear()} CBC/Radio-Canada. All Rights reserved `;
}

function getApiData() {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=a4f49f29c7d7447682b40ab6ec70c8a4"
  )
    .then((res) => res.json())
    .then((data) => {
      let landigImg = document.querySelector(".landigImg");
      landigImg.setAttribute("src", data.articles[0].urlToImage);
      let LandingTitle = document.querySelector(".landing .title");
      LandingTitle.innerHTML = data.articles[0].title;
      let landingDesc = document.querySelector(".landing .description");
      landingDesc.innerHTML = data.articles[0].description;
      let landingContent = document.querySelector(".landing .content");
      landingContent.innerHTML = data.articles[0].content;
    });
}

getApiData();
