const portf=["This project has a special place in my heart for being the First game I ever created. In order to practice my Javascript, It was written without Any libraies or FrameWorks. You guess words about 8-bit topics. if you guess wrong the letter turns red, guess right and you get a green letter and the letter also appears on the DOM, lots of fun and it made me really enjoy doing Homework","This one was built using jquery and bootstrap, but non the less it was one of the hardest ones ive done. I didnt fully understand jquery when making this and DOM manipulation was a new idea. but non the less i love a good puzzle. planning out the flow of the code is always exciting to me. I really understood the bolder points of jquery after this","Learning API calls is always a strange topic to learn. It sounded scary and all I knew was some syntax, still i have alot to learn but this was a great start to connecting front end and back end projects. I dont think anyone truly masters APIs you just learn one less way of messing up.","So as you can probably tell I'm a Star wars fan. So when I had to make a trivia game this was a no brainer. I hardly had to do any research for this seeing that I know anything there is to know about the franchise. The order of the questions and answers is randomized for every test. There are 11 questions and 20 saved in javascript, so no two tests are alike!","Bamazon was a really fun one to make, I used MySQL to create a dataBase and display the results in Node. Since I have experince with Firebase this was easy as pie, with that in mind i still would like to further my knowledge in MySQL. Back-end programming is my favorite"]
var portt=$("#hman");
$(".list-group-item").on("click", function(){
    $(".content").addClass("hide");
    var con=$(this).attr("data-content")
    if(con!=="back"){
        $("#"+con+"").removeClass("hide");
    }
})
$(".portl").on("click", function(){
    portt.removeClass("active")
    $(this).addClass("active")
    portt=$(this)
    var img=$(this).attr("data-content")
    var words=$(this).attr("data-still")
    var link=$(this).attr('data-animate')
    var num=parseInt(words)
    $(".portp").attr("src",img)
    $("#portw").text(portf[num])
    $("#visit").attr("href",link)
    console.log(portt)
})


