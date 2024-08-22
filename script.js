var projectsList = [
    // 1. JS Game
    {
        id: "1",
        page: "JS_Game.html",
        title: "JavaScript Game",
        date: "May 2018",
        thumbnail: "./Assets/Pictures/Project_JSGame/Thumbnail_JSGame.jpg",
        filters: ["all", "coding"],
        tags: ["HTML", "JavaScript", "SQL"],
    },
    // 2. Wakanda Forever
    {
        id: "2",
        page: "Metalwork_Shield.html",
        title: "Metalwork Shield",
        date: "May 2019",
        thumbnail: "./Assets/Pictures/Project_Shield/Thumbnail_Shield.jpg",
        filters: ["all", "build"],
        tags: ["Metalwork", "MIG Welding", "Sheet Metal Design"],
    },
    // 3. CAD Keychain
    {
        id: "3",
        page: "CAD_Keychain.html",
        title: "CAD Keychain",
        date: "Oct 2019",
        thumbnail: "./Assets/Pictures/Project_CADKeychain/Thumbnail_CADKeychain.jpg",
        filters: ["all", "design"],
        tags: ["OnShape", "Product Design"],
    }, 
    // 4. Line Follower Bot
    {
        id: "4",
        page: "Line_Follower.html",
        title: "Line Follower Bot",
        date: "Dec 2020",
        thumbnail: "./Assets/Pictures/Project_LineBot/Thumbnail_LineBot.jpg",
        filters: ["all", "build", "coding", "design"],
        tags: ["Arduino", "Design"],
    },
    // 5. CUMSHOT
    {
        id: "5",
        page: "Synth_Glove.html",
        title: "Audio Synth Glove",
        date: "Apr 2021",
        thumbnail: "./Assets/Pictures/Project_SynthGlove/Thumbnail_SynthGlove.jpg",
        filters: ["all", "design", "coding"],
        tags: ["ESP32", "JavaScript", "UI Design"],
    },
    // 6. TITS
    {
        id: "6",
        page: "Tremor_Glove.html",
        title: "Tremor Stabilizer Glove",
        date: "Apr 2022",
        thumbnail: "./Assets/Pictures/Project_TremorGlove/Thumbnail_TremorGlove.jpg",
        filters: ["all", "build", "coding", "design"],
        tags: ["Gyroscope", "Myoware EMG", "Product Design"],
    },
    // 7. Website
    {
        id: "7",
        page: "Website.html",
        title: "Website",
        date: "Ongoing",
        thumbnail: "./Assets/Pictures/Project_Website/Thumbnail_Website.jpg",
        filters: ["all", "design", "coding"],
        tags: ["Bootstrap", "JavaScript", "Web Design"],
    },
    // 8. Ataksak
    {
        id: "8",
        page: "Drone_Claw.html",
        title: "UAV / UGV Drone Claw",
        date: "May 2022",
        thumbnail: "./Assets/Pictures/Project_Ataksak/Thumbnail_Ataksak.jpg",
        filters: ["all", "build", "design"],
        tags: ["Actuators", "Mechanum Drive", "Waterjet"],
    },
    // 9. ARM
    {
        id: "9",
        page: "Restaurant_Bot.html",
        title: "Restaurant Robot Design",
        date: "Feb 2023",
        thumbnail: "./Assets/Pictures/Project_ARM/Thumbnail_ARM.jpg",
        filters: ["all", "design"],
        tags: ["Competition", "Product Design", "SolidWorks"],
    },
    // 10. Air Taxi Cabin
    {
        id: "10",
        page: "Air_Taxi.html",
        title: "Subscale Air Taxi Cabin",
        date: "May 2023",
        thumbnail: "./Assets/Pictures/Project_AirTaxi/Thumbnail_AirTaxi.jpg",
        filters: ["all", "build","design"],
        tags: ["Carbon Fibre Layup", "CFD", "Surface Modeling"],
    },
    // 11. SUAS Winch
    {
        id: "11",
        page: "EM_Winch.html",
        title: "Electromagnetic Winch",
        date: "May 2023",
        thumbnail: "./Assets/Pictures/Project_Winch/Thumbnail_Winch.jpg",
        filters: ["all", "build"],
        tags: ["Controls", "Electromagnet", "Rapid Prototyping"],
    },
    // 12. Airplane Bot (ARM2)
    {
        id: "12",
        page: "Airplane_Retriever.html",
        title: "Airplane Retrieval Robot",
        date: "Mar 2024",
        thumbnail: "./Assets/Pictures/Project_AirplaneBot/Thumbnail_AirplaneBot.jpg",
        filters: ["all", "build", "coding"],
        tags: ["Arduino", "Competition", "Rapid Prototyping"],
    },
    // 13. Cosplay
    {
        id: "13",
        page: "Cosplay.html",
        title: "Silver Wolf Cosplay",
        date: "Ongoing!",
        thumbnail: "./Assets/Pictures/Project_Cosplay/Thumbnail_Cosplay.jpg",
        filters: ["all", "build", "design"],
        tags: ["3D-Printing", "Onshape", "Surface Modeling"],
    },
    // 14. BITCHES
    {
        id: "14",
        page: "Haptic_Glove.html",
        title: "Haptic Manipulator Glove",
        date: "Apr 2024",
        thumbnail: "./Assets/Pictures/Project_HapticGlove/Thumbnail_HapticGlove.jpg",
        filters: ["all", "build", "design"],
        tags: ["DFMA", "Robotics", "Surface Modeling"],
    },
    /* // 15. Jiraint
    {
        id: "15",
        page: "ToDoApp.html",
        title: "To-Do List Flask App",
        date: "Ongoing!",
        thumbnail: "./Assets/Pictures/Project_HapticGlove/Thumbnail_HapticGlove.jpg",
        filters: ["all", "Coding"],
        tags: ["Flask", "JavaScript", "Python"],
    }, */
]

function scrollPage(num){
    let unit = document.documentElement.scrollHeight * num / 100
    window.scrollTo({top: unit, behavior: 'smooth'});
}

function createTable(filterWord){
    console.clear();
    //Grab parent div
    var parentDiv = document.getElementById("tableContainer");
    //Clear the div
    parentDiv.innerHTML = " ";
    //Find all the projects with the required filter, put into new array called 'filteredProjects'
    let filteredProjects = projectsList.filter(project => project.filters.includes(filterWord));
    
    //Start forEach loop here
    for (i=0; i < filteredProjects.length; i++){
        //Create project card, assign class
            //Outer Container
        var projectContainer = document.createElement("div");
            projectContainer.className = "projectCardContainer col-sm-12 col-md-6 col-lg-6 col-xl-4";
            //Inner Container
        var projectCard = document.createElement("div");
            projectCard.className = "projectCard";
            //Thumbnail
        var thumbnail = document.createElement("img");
            thumbnail.className = "projectThumbnail";
            thumbnail.src = filteredProjects[i].thumbnail;
            //Title
        var banner = document.createElement("text");
            banner.className = "projectCardBanner";
            banner.innerHTML = filteredProjects[i].title;
        var bannerWrapper = document.createElement("div");
            bannerWrapper.className = "projectCardBannerOuter";
            //Outer Footer
        var bannerFooter = document.createElement("div");
            bannerFooter.className = "projectCardFooter";
            //Footer Date
        var bannerFooterDate = document.createElement("div");
            bannerFooterDate.className = "projectCardFooterDate";
            bannerFooterDate.innerHTML = filteredProjects[i].date;
            //Footer Tags
        var bannerFooterTagContainer = document.createElement("div");
            bannerFooterTagContainer.className = "projectCardFooterTagContainer";
            bannerFooterTagContainer.innerHTML = filteredProjects[i].tags.join(" / ");

            //Assign ids
        var cardID = "projectCard_" +  String(filteredProjects[i].id);
            projectCard.id = cardID;

            //Assign page direction for onclick
        var link = document.createElement("a");
            (function(index){
                link.href = String(("./projects/" + filteredProjects[index].page));
            })(i)
        
        //Append card to row then restart the loop until finished
        //NOTE: Card needs to be wrapped in an <a> element to take to page properly
            //Else, back button doesnt work wompwomp
        projectCard.appendChild(thumbnail);         //Append thumbnail to card
        bannerWrapper.appendChild(banner);          //Append banner to banner wrapper
        projectCard.appendChild(bannerWrapper);     //Append banner + banner wrapper to card
        bannerFooter.appendChild(bannerFooterDate);
        bannerFooter.appendChild(bannerFooterTagContainer);
        projectCard.appendChild(bannerFooter);
        link.appendChild(projectCard);              //Wrap the card in a link to make it go to webpage
        projectContainer.appendChild(link);         //Append card + link to outer flex container
        parentDiv.prepend(projectContainer);        //Append flex container to row
    }
    //Create animation after the project table is finished but hidden
    for (i = 1; i <= filteredProjects.length; i++){
        (function(index){
            setTimeout(()=>{
                //Go in reverse order to animate from most recent to oldest
                var currentCard = "projectCard_" + String(filteredProjects[(filteredProjects.length - index)].id);
                console.log(currentCard)
                document.getElementById(currentCard).classList.add("animate");
            },index * 50);
        })(i)
    }
}

function resetButtons(num){
    for (i=1; i < 5; i++){
        var buttonString = "tableButton" + i;
        var button = document.getElementById(buttonString)
        button.className = "tableButton";
        if(i == num){
            button.className = "tableButton-active";
        }
    }
}


window.addEventListener("DOMContentLoaded", () => {

    console.log("DOM fully loaded and parsed");

    //Create an observer to check all the IDs of nav_section class found using querySelector
    const observer = new IntersectionObserver(sections => {
        sections.forEach(section => {
            const id = section.target.getAttribute('id');
            if (section.intersectionRatio > 0){
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            }
            else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
            
        })
    });

    document.querySelectorAll('div.nav_section').forEach((div) => {
        observer.observe(div);
    });
});