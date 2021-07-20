function create_player(player,role,img){
    // parent
    const div_col = document.createElement("div");
    div_col.className = "column";
    
    // child
    const div_card = document.createElement("div");
    div_card.className = "card";
    
    // part 1
    const player_img = document.createElement("img");
    player_img.src = img;
//    player_img.style.width = "250px";
//    player_img.style.height = "200px";
    
    // part 2
    const div_container = document.createElement("div");
    div_container.className = "container";
    const player_no = document.createElement("H4");
    const player_name = document.createTextNode(player);
    const player_role = document.createTextNode(role);
    player_no.append(player_name);
    div_container.append(player_no);
    div_container.append(player_role);
    
    div_card.append(player_img);
    div_card.append(div_container);
    div_col.append(div_card);
    
    document.getElementById("game_card").appendChild(div_col);
}

function player_info(){
    var chor_img = "../lib/img/chor.png";
    var police_img = "../lib/img/police.png";
    var dakat_img = "../lib/img/dakat.png";
    var babu_img = "../lib/img/babu.png";
    // 
//    create_player("Player 1","Chor",chor_img);
//    create_player("Player 2","Police",police_img);
//    create_player("Player 3","Dakat",dakat_img);
//    create_player("Player 4","Babu",babu_img);    
}

function reveal_id(){
    console.log("hello rotate");
    let ele = document.getElementsByClassName("flip-card-inner");
    ele[0].style.transform = "rotateY(180deg)";
//    console.log(ele);
}

//var chor_img = "https://cdn2.vectorstock.com/i/1000x1000/64/21/robber-silhouette-black-vector-8066421.jpg";
//var police_img = "https://thumbs.dreamstime.com/b/silhouette-policeman-isolated-image-police-officer-illustration-symbol-icon-204509474.jpg";
//var dakat_img = "https://cdn.xxl.thumbs.canstockphoto.com/robber-silhouette-black-isolated-on-white-background-illustration_csp35477823.jpg";
//var babu_img = "https://thumbs.dreamstime.com/b/silhouette-dancer-joker-top-hat-dancing-isolated-white-background-144127165.jpg";

//console.log("1");
//player_info();