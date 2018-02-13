var loginid  = localStorage.getItem("resid");
console.log(loginid);
$("#page").text( "welcome " +loginid);


function respone(source,topic) {

    var xhhtp = new XMLHttpRequest();
    xhhtp.open('GET',"https://newsapi.org/v2/everything?q="+topic+"&sources="+source+"&apiKey=b5468b9937314c37ae472c8d30430664", false);
    xhhtp.send();
    return xhhtp;
}

function showdata(news) {

    console.log(news.articles);
    $("#card1").show();
    $("#news1").text(news.articles[0].title);
    $("#news11").text(news.articles[0].description);
    $("#news111").attr("href",news.articles[0].url);
    $("#image1").attr("src",news.articles[0].urlToImage);
    $("#time1").text(news.articles[0].publishedAt);
    $("#card2").show();
    $("#news2").text(news.articles[1].title);
    $("#news21").text(news.articles[1].description);
    $("#news211").attr("href",news.articles[1].url);
    $("#image2").attr("src",news.articles[1].urlToImage);
    $("#time2").text(news.articles[1].publishedAt);
    $("#card3").show();
    $("#news3").text(news.articles[2].title);
    $("#news31").text(news.articles[2].description);
    $("#news311").attr("href",news.articles[2].url);
    $("#image3").attr("src",news.articles[2].urlToImage);
    $("#time3").text(news.articles[2].publishedAt);
    $("#card4").show();
    $("#news4").text(news.articles[3].title);
    $("#news41").text(news.articles[3].description);
    $("#news411").attr("href",news.articles[3].url);
    $("#image4").attr("src",news.articles[3].urlToImage);
    $("#time4").text(news.articles[3].publishedAt);
    $("#card5").show();
    $("#news5").text(news.articles[4].title);
    $("#news51").text(news.articles[4].description);
    $("#news511").attr("href",news.articles[4].url);
    $("#image5").attr("src",news.articles[4].urlToImage);
    $("#time5").text(news.articles[4].publishedAt);
    $("#card6").show();
    $("#news6").text(news.articles[5].title);
    $("#news61").text(news.articles[5].description);
    $("#news611").attr("href",news.articles[5].url);
    $("#image6").attr("src",news.articles[5].urlToImage);
    $("#time6").text(news.articles[5].publishedAt);
    $("#card7").show();
    $("#news7").text(news.articles[6].title);
    $("#news71").text(news.articles[6].description);
    $("#news711").attr("href",news.articles[6].url);
    $("#image7").attr("src",news.articles[6].urlToImage);
    $("#time7").text(news.articles[6].publishedAt);
    $("#card8").show();
    $("#news8").text(news.articles[7].title);
    $("#news81").text(news.articles[7].description);
    $("#news811").attr("href",news.articles[7].url);
    $("#image8").attr("src",news.articles[7].urlToImage);
    $("#time8").text(news.articles[7].publishedAt);
}

$(document).ready(function () {

    $("#search").click(function () {

        topic = $("#topic").val();
        source= $("#source").val();
        console.log(source);
        console.log(topic);
        resp = respone(source,topic);
        if (resp.status == 200){
            showdata(JSON.parse(resp.responseText));
            console.log("success");
        }else{
            console.log("not find");

        }
    })
    
});