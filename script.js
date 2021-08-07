var projectList = [
    //All Projects, ordered from most recent
    [8,7,6,5,4,3,2,1],
    //Drafting Projects
    [6,5,4],
    //Physical Projects
    [7,6,3,1],
    //Software Projects
    [8,7,6,2]
];

var projectsComplete = [
    //Project1 : SumoBot
    {
        title: "SumoBot",
        img: "Assets/iconProject1.jpg",
        classifiers: "Physical",
        page:"projectMain1",
        bannerImg: "Assets/proj8/glove1",
        desc: "Competition featuring player-driven sumobots. Chassis created from sheet metal, controller from wood, and components hand soldered."
    },
    //Project2 : JavaScript Game
    {
        title: "JavaScript Game",
        img: "Assets/iconProject2.png",
        classifiers: "Software",
        page:"projectMain2",
        bannerImg: "Assets/iconProject8.jpg",
        desc: "High-school game. Choice driven storyline with turn-style combat in-line with Pokemon, Final Fantasy, etc. Coded using HTML, CSS, Javascript, and PHP."
    },
    //Project3 : Wakandan Shield
    {
        title: "Shield Design",
        img: "Assets/iconProject3.jpg",
        classifiers: "Physical",
        page:"projectMain3",
        bannerImg: "Assets/iconProject8.jpg",
        desc: "High-school metalwork project. Recreation of the Captain America's Wakandan Shield made from 18-gauge steel."
    },

    //Project4 : CAD Keychain
    {
        title: "CAD Keychain",
        img: "Assets/iconProject4.png",
        classifiers: "Drafting",
        page:"projectMain4",
        bannerImg: "Assets/iconProject8.jpg",
        desc: "Interactable gear keychain designed in the OnShape CAD program, with final design voted as a Top 10 model among 1000+ peers."
    },
    //Project5 : Cardboard Chair
    {
        title: "Cardboard Chair",
        img: "Assets/iconProject5.jpg",
        classifiers: "Drafting | Physical",
        page:"projectMain5",
        bannerImg: "Assets/iconProject8.jpg",
        desc: "University Year 1 design project. Design a sturdy and portable chair utilizing sustainable resources. Capable of supporting 200+ lbs, with < 30s assembly time."
    },
    //Project6 : Robotic Claw
    {
        title: "Robotic Claw",
        img: "Assets/iconProject6.jpg",
        classifiers: "Drafting | Physical | Software",
        page:"projectMain6",
        bannerImg: "Assets/iconProject8.jpg",
        desc: "University Year 1 project. Design and fabricate a device capable of retrieving an assortment of objects in a given period of time. Body created from aluminum, coded for Arduino in C++."
    },

    //Project7 : Line Following Robot
    {
        title: "Line Following Robot",
        img: "Assets/iconProject7.jpg",
        classifiers: "Drafting | Physical | Software",
        page:"projectMain7",
        bannerImg: "Assets/iconProject8.jpg",
        desc: "University Year 1 project. Design and code a robot which utilizes IR sensors to follow a black line unassisted and in a short time."
    },
    //Project8 : Audio Synthesizer Glove
    {
        title: "Audio Synthesizer Glove",
        img: "Assets/iconProject8.jpg",
        classifiers: "Drafting | Software",
        page:"projectMain8",
        bannerImg: "Assets/proj8/glove1.png",
        desc: "University Year 2 capstone. A glove capable of translating hand and finger movements into basic audio. ESP32 used as microcontroller, with information being sent and decoded over WiFi to a JavaScript UI."
    }
];
var projectsOngoing = [
    //Sorted by start date
    //This website
    {
        title: "Site",
        img: "Assets/iconProjectOngoing1.png",
        classifiers: "Software",
        page:"projectOngoingMain1",
        bannerImg: "Assets/iconProject8.jpg",
        desc: "This current webpage. Learning to apply Bootstrap and Javascript, while practicing web design."
    },
    //DivEye
    {
        title: "Diveye",
        img: "Assets/iconProjectOngoing2.jpeg",
        classifiers: "Drafting | Physical | Software",
        page:"projectOngoingMain2",
        bannerImg: "Assets/iconProject8.jpg",
        desc: "Diving goggles with integrated components to provide a heads-up-display which shows pressure, time underwater, etc."
    },
    //Figgle Jiggle
    {
        title: "FIGJIG",
        img: "Assets/iconProjectOngoing3.jpg",
        classifiers: "Drafting | Physical | Software",
        page:"projectOngoingMain3",
        bannerImg: "Assets/proj8/glove1",
        desc: "An assistive device designed to help afflicted individuals suppress hand tremors using myoware sensors and machine learning."
    },
];
var projectFlag;

//loadMe()
    //All functionality done on page load, completed once
function loadMe(){
}

//-----Menu Things-----//
//menuBarDisplay()
    //Reveals menu bar with the icons to different pages
//menuBarHide()
    //Conceals menu bar and icons
function menuBarDisplay(){
    document.getElementById("menuBar").style.height="330px";
    document.getElementById("homeDrop").style.opacity="1";
    document.getElementById("gridDrop").style.opacity="1";
    document.getElementById("contactDrop").style.opacity="1";
}
function menuBarHide(){
    document.getElementById("menuBar").style.height="50px";
    document.getElementById("homeDrop").style.opacity="0";
    document.getElementById("gridDrop").style.opacity="0";
    document.getElementById("contactDrop").style.opacity="0";
    document.getElementById("menuHomeText").style.display="none";
    document.getElementById("menuGridText").style.display="none";
    document.getElementById("menuContactText").style.display="none";
}
//menuShow(name)
    //On icon hover, display the icon name
function menuShow(name){
    document.getElementById(name).style.display="block";
}
//menuPage(page)
    //On icon select, display the 
function menuPage(page){
    closeMe();
    document.getElementById("homeSpan").style.display="none";
    document.getElementById("projectSpan").style.display="none";
    document.getElementById("contactSpan").style.display="none";
    document.getElementById("projectMain").style.display="none";

    document.getElementById(page).style.display="block";
}

//-----Project Page Things-----//
//displayProject(project)
    //Displays the given project page, temporarily closing all other spans
function displayProject(project){
    document.getElementById("homeSpan").style.display="none";
    document.getElementById("projectSpan").style.display="none";
    document.getElementById("contactSpan").style.display="none";
    document.getElementById("projectMain").style.display="block";
    document.getElementById(project).style.display="block";
}
//closeMe()
    //Closes all project divs, returns to project screen
function closeMe(){
    document.getElementById("projectMain1").style.display="none";
    document.getElementById("projectMain2").style.display="none";
    document.getElementById("projectMain3").style.display="none";
    document.getElementById("projectMain4").style.display="none";
    document.getElementById("projectMain5").style.display="none";
    document.getElementById("projectMain6").style.display="none";
    document.getElementById("projectMain7").style.display="none";
    document.getElementById("projectMain8").style.display="none";
    document.getElementById("projectOngoingMain1").style.display="none";
    document.getElementById("projectOngoingMain2").style.display="none";
    document.getElementById("projectOngoingMain3").style.display="none";
    document.getElementById("projectMain").style.display="none";
    document.getElementById("projectSpan").style.display="block";
}
//banner(pic)
    //Sets the project page banner
function banner(pic){
    document.getElementById("banner").src = pic;
}
//createTable(sorter)
    //sorter: The category of which the table is sorted by
    //Creates 3 by x table where x is rows of 3, created in order of most recent
function createTable(sorter){
    //Clear the existing table
    document.getElementById("projectTable").innerHTML="";
    var amount = projectList[sorter].length - 1;
    var i = 0;
    while(i <= amount){
        //Create row
        var row = document.createElement("tr");
        //Append row to table
        document.getElementById("projectTable").appendChild(row);
        //Create cells in groups of 3 per row
        for(let j=0; j<3; j++){
            var current = projectsComplete[(projectList[sorter][i] - 1)];
            //Check if project exists: Empty projects are undefined, will end loop in that case
            if (typeof current != "undefined"){
            //Create a cell
            var cell = document.createElement("td");
                //Add Class
                cell.classList.add("projectSq");
                (function(index){cell.id="td" + index})(i);
                //Add function onclick
                (function(index){
                    var goPage = projectsComplete[(projectList[sorter][index] - 1)].page; 
                    cell.addEventListener("click", function(){
                        displayProject(goPage), 
                        descShow('Overview', (projectList[sorter][index]))
                        document.getElementById("projectTitle").innerHTML=projectsComplete[(projectList[sorter][index] - 1)].title;
                        document.getElementById("banner").src=projectsComplete[(projectList[sorter][index] - 1)].bannerImg})
                })(i)
                //Create image
                    var container = document.createElement("div");
                        container.classList.add("iconImageCon");
                    var pic = document.createElement("img");
                    //Add class
                    pic.classList.add("iconImage");
                    pic.src = current.img;
                    //Append image to cell
                    container.appendChild(pic)
                    cell.appendChild(container);
                //Create icon banner
                    var iconInfo = document.createElement("text");
                    //Add class
                    iconInfo.classList.add("iconTitle");
                    iconInfo.innerHTML = current.title;
                    //Add linebreak
                    var br = document.createElement("br");
                        iconInfo.appendChild(br);
                    //Add classifiers
                    var classifier = document.createElement("text");
                        classifier.innerHTML = current.classifiers;
                        classifier.style.color = "rgba(121, 121, 121)"
                        classifier.style.fontSize = "1vw";
                        iconInfo.appendChild(classifier);
                    //Append icon banner to cell
                    cell.appendChild(iconInfo);
                //Create project descriptor
                    var descContainer = document.createElement("div");
                        descContainer.classList.add("iconDesc");
                    var descTitleCon = document.createElement("div");
                        descTitleCon.classList.add("descTitle");
                    var descTitle = document.createElement("text");
                        descTitle.classList.add("descTitle");
                    var desc = document.createElement("text");
                        desc.classList.add("descText");
                    var myLine = document.createElement("div");
                        myLine.classList.add("descLine");
                    descTitle.innerHTML = current.title;
                    descTitleCon.appendChild(descTitle);
                    desc.innerHTML = current.desc;
                    descContainer.appendChild(descTitleCon);
                    descContainer.appendChild(desc);
                    descContainer.appendChild(myLine);
                    cell.appendChild(descContainer);
            }
            //Append cell to the row and increment to move to the next project in list
            row.appendChild(cell);
            i++;
        }
    }
    //Add a snazzy sequential animation
    for(let k=0; k<=amount; k++){
        (function(index){
            setTimeout(()=>{
                var current = "td" + index;
                var cell = document.getElementById(current);
                cell.classList.add("animate");
            },index*50);
        })(k)
    }
}
//ongoingTable()
    //Same as createTable(sorter)
    //Only shows ongoing projects
function ongoingTable(){
    document.getElementById("projectTable").innerHTML="";
    var amount = projectsOngoing.length - 1;
    var i = 0;
    while(i <= amount){
        var row = document.createElement("tr");
        document.getElementById("projectTable").appendChild(row);
        for(let j=0; j<3; j++){
            var current = projectsOngoing[i];
            if (typeof current != "undefined"){
            //Create a cell
            var cell = document.createElement("td");
                //Add Class
                cell.classList.add("projectSq");
                (function(index){cell.id="td" + index})(i)
                //Add function
                cell.onclick = function(){
                    console.log(current.title);
                };
                (function(index){
                    var goPage = projectsOngoing[index].page; 
                    cell.addEventListener("click", function(){
                        displayProject(goPage), 
                        descShow('OngoingOverview', (index+1))
                        document.getElementById("projectTitle").innerHTML=projectsOngoing[index].title})
                })(i)
                //Create image
                    var container = document.createElement("div");
                        container.classList.add("iconImageCon");
                    var pic = document.createElement("img");
                    //Add class
                    pic.classList.add("iconImage");
                    pic.src = current.img;
                    //Append image to cell
                    container.appendChild(pic)
                    cell.appendChild(container);
                //Create icon banner
                    var iconInfo = document.createElement("text");
                    //Add class
                    iconInfo.classList.add("iconTitle");
                    iconInfo.innerHTML = current.title;
                    //Add linebreak
                    var br = document.createElement("br");
                        iconInfo.appendChild(br);
                    //Add classifiers
                    var classifier = document.createElement("text");
                        classifier.innerHTML = current.classifiers;
                        classifier.style.color = "rgba(121, 121, 121)"
                        classifier.style.fontSize = "1vw";
                        iconInfo.appendChild(classifier);
                    //Append icon banner to cell
                    cell.appendChild(iconInfo);
                //Create project descriptor
                    var descContainer = document.createElement("div");
                        descContainer.classList.add("iconDesc");
                    var descTitleCon = document.createElement("div");
                        descTitleCon.classList.add("descTitle");
                    var descTitle = document.createElement("text");
                        descTitle.classList.add("descTitle");
                    var desc = document.createElement("text");
                        desc.classList.add("descText");
                    var myLine = document.createElement("div");
                        myLine.classList.add("descLine");
                    descTitle.innerHTML = current.title;
                    descTitleCon.appendChild(descTitle);
                    desc.innerHTML = current.desc;
                    descContainer.appendChild(descTitleCon);
                    descContainer.appendChild(desc);
                    descContainer.appendChild(myLine);
                    cell.appendChild(descContainer);
            }
            row.appendChild(cell);
            i++;
        }
    }
    for(let k=0; k<=amount; k++){
        (function(index){
            setTimeout(()=>{
                var current = "td" + index;
                var cell = document.getElementById(current);
                cell.classList.add("animate");
            },index*50);
        })(k)
    }
}

//-----Project Descriptor Things-----//
//descShow()
    //: The descriptor page to be displayed
function closeAll(){
    var amountComplete = projectList[0].length;
    var amountOngoing = projectsOngoing.length;
    for(i = 1; i <= amountComplete; i++){
        (function(index){
            var overview = "descOverview" + index;
            var details = "descDetails" + index;
            var skills = "descSkills" + index;
            var materials = "descMaterials" + index;
            var awards = "descAwards" + index;
            document.getElementById(overview).style.display = "none";
            document.getElementById(details).style.display = "none";
            document.getElementById(skills).style.display = "none";
            document.getElementById(materials).style.display = "none";
            document.getElementById(awards).style.display = "none";
        })(i)
    }
    for(i = 1; i <= amountOngoing; i++){
        (function(index){
            var overview = "descOngoingOverview" + index;
            var details = "descOngoingDetails" + index;
            var skills = "descOngoingSkills" + index;
            var materials = "descOngoingMaterials" + index;
            var awards = "descOngoingAwards" + index;
            document.getElementById(overview).style.display = "none";
            document.getElementById(details).style.display = "none";
            document.getElementById(skills).style.display = "none";
            document.getElementById(materials).style.display = "none";
            document.getElementById(awards).style.display = "none";
        })(i)
    }
    closeMe();
}
function clearDesc(val){
    var overview = "descOverview" + val;
    var details = "descDetails" + val;
    var skills = "descSkills" + val;
    var materials = "descMaterials" + val;
    var awards = "descAwards" + val;
    document.getElementById(overview).style.display = "none";
    document.getElementById(details).style.display = "none";
    document.getElementById(skills).style.display = "none";
    document.getElementById(materials).style.display = "none";
    document.getElementById(awards).style.display = "none";
}
function descShow(descPage, num){
    var current = "desc" + descPage + num;
    clearDesc(num);
    document.getElementById(current).style.display="block";
}