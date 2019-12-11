var experienceBtn = $("#experience");
var educationBtn = $("#education");
var languagesBtn = $("#languages");
var contactBtn = $("#contact");
var stripe_btns = [experienceBtn, educationBtn, languagesBtn, contactBtn]
var content = $("#main-content");

remove_stripe_selected = function(){
    stripe_btns.forEach(function(btn){
        btn.removeClass("stripe-btn-selected")
    });
}


add_education=function(){
    content.append('<div id="education-content" class="container pl-4"></div>')
    $("#education-content").append('<h2 class="lead">Technion - Israel Institute of Technology</h2>')
    $("#education-content").append('<ul><li>Computer Science Bachelor\'s Degree (2020-)</li></ul>')
    $("#education-content").append('<h2 class="lead">Open University of Israel</h2>')
    $("#education-content").append('<ul><li>Linear Algebra Course (2017-2018)</li></ul>')
        
};

educationBtn.on("click",function(event){
    remove_stripe_selected();
    educationBtn.addClass("stripe-btn-selected")
    content.fadeOut(1);
    content.empty();
    add_education();
    content.fadeIn(500);
});

add_language = function(){
    content.append('<div id="languages-content" class="container pl-4"></div>')
    $("#languages-content").append('<ul id="language"></ul>');
    $("#language").append('<li class="lan-list-item">Hebrew  - Native</li>');
    $("#language").append('<li class="lan-list-item">English - Fluent </li>');
    $("#language").append('<li class="lan-list-item">Russian - Medium</li>');
    $("#language").append('<li class="lan-list-item">Spanish - Basic</li>');
};

languagesBtn.on("click",function(event){
    remove_stripe_selected();
    languagesBtn.addClass("stripe-btn-selected")
    content.fadeOut(1);
    content.empty();
    add_language();
    content.fadeIn(500);
});

add_contact_info = function(){
    content.append('<div id="contact-content" class="container"></div>');
    $("#contact-content").append('<ul id="contact-info"></ul>');
    $("#contact-info").append('<li class="contact-info"><span class="mr-2"><i class="fas fa-phone icon contact-icon"></i></span> +972 50-4832441</li>');
    $("#contact-info").append('<li class="contact-info"><span class="mr-2"><i class="far fa-envelope icon contact-icon"></i></span> gabiks318@gmail.com</li>');
    $("#contact-info").append(' <li class="contact-info"><span class="mr-2"><i class="fab fa-github icon contact-icon"></i></span><a id="github" href="https://github.com/gabiks318"> gabiks318</a></li>');
};

contactBtn.on("click",function(event){
    remove_stripe_selected();
    contactBtn.addClass("stripe-btn-selected")
    content.fadeOut(1);
    content.empty();
    add_contact_info();
    content.fadeIn(500);
});

var zickel = {header:"Zickel Engineering",
            content:[["Development using microcontrollers such as Arduino, Raspberry Pi, ODROID, Teensy, BLT, ESP8266",
        "Server development in Linux environment",
    "Basic image processing using OpenCV",
    "Programming languages: C++, Python and basic knowledge of Matlab"],
["Development of mechanical components using Solidworks",
"Design in accordance with the manufacture techniques such as 3D Printing, CNC, Machining, Metalworking",
"Drawing manufacture sketches and direct contact with suppliers during the production process",
"Operating 3D printers"]],
btn_name:"zickel-btn",
years:"(2018-2019)",
h3:["Embedded Developer","Mechanical Designer"]};

var freelance = {header:"Freelance Work",
                content:["Full stack web development using NodeJS and Flask frameworks",
                "Integrating APIs with applications such as google maps",
                "Work experience with HTML, CSS, Javascript and tools such as Bootstrap and JQuery",
            "SQL Databases"],
        btn_name:"freelance-btn",
    years:"(2018-)",
h3:"Full-Stack Web Developer"};

var idf = {header:"Israel Defence Forces",
            content:["Managing development process of military equipment",
        "Study of client needs, characterization of the product, implementation and instruction of the client",
    "Procurement management, direct contact with suppliers and subcontractors"],
btn_name:"idf-btn",
years:"(2015-2018)",
h3:"Project Manager"};

var jobs = [zickel, freelance, idf]

var experience = "<div id='job-container' class='container-fluid'>\
                    <div id='job-row' class='row justify-content-start'>\
                        <div class='btn-group-vertical col-2'></div>\
                        <div class='job-content col-8'></div>\
                    </div>\
                </div>"


add_job_container = function(){
    content.append("<div id='job-container' class='container-fluid'></div>");
    $("#job-container").append("<div id='job-row' class='row justify-content-start'></div>");
    $("#job-row").append("<div class='btn-group-vertical align-self-start col-2'></div>")
    $("#job-row").append("<div class='job-content col-8'></div>")

}
add_buttons = function(jobs){
    jobs.forEach(function(job){
        if(job.header ==="Zickel Engineering"){
            $(".btn-group-vertical").append("<button id='"+job.btn_name +"' type='button' class='btn btn-sm btn-selected'>"+job.header+"</button>");
        } else{
        $(".btn-group-vertical").append("<button id='"+job.btn_name +"' type='button' class='btn btn-sm'>"+job.header+"</button>");
        }
    });
};

add_job_content = function(job){
    var job_content = $(".job-content");
    if(job.header ==="Zickel Engineering"){
        job_content.append("<h2 class='lead'>"+ job.header +" "+ job.years +"</h2>")

        job_content.append("<h3>"+ job.h3[0] +"</h3>")
        job_content.append("<ul id='zickel-1'></ul>");
        job.content[0].forEach(function(item){
            $(".job-content #zickel-1").append("<li>"+ item +"</li>");
        });
        job_content.append("<h3>"+ job.h3[1] +"</h3>")
        job_content.append("<ul id='zickel-2'></ul>");
        job.content[1].forEach(function(item){
            $(".job-content #zickel-2").append("<li>"+ item +"</li>");
        });
    } else {
        
        job_content.append("<h2 class='lead'>"+ job.header +" "+ job.years +"</h2>")
        job_content.append("<h3>"+ job.h3 +"</h3>")
        job_content.append("<ul></ul>");
        job.content.forEach(function(item){
        $(".job-content ul").append("<li>"+ item +"</li>");
    });

    }
    
};


remove_jobs_selected = function(){
    $("#zickel-btn").removeClass("btn-selected")
    $("#freelance-btn").removeClass("btn-selected")
    $("#idf-btn").removeClass("btn-selected")
}

    $("#main-content").on("click","#zickel-btn",function(event){
        remove_jobs_selected();
        $("#zickel-btn").addClass("btn-selected");
        var job_content = $(".job-content");
        job_content.fadeOut(1,function(){
            console.log("faded-out");
        });
        job_content.empty();
        add_job_content(jobs[0]);
        job_content.fadeIn(500,function(){
            console.log("faded-in");
        });
    });

    $("#main-content").on("click","#freelance-btn",function(event){
        remove_jobs_selected();
        $("#freelance-btn").addClass("btn-selected");
        var job_content = $(".job-content")
        job_content.fadeOut(1,function(){
            console.log("faded-out");
        });
        job_content.empty();
        add_job_content(jobs[1]);
        job_content.fadeIn(500,function(){
            console.log("faded-in");
        });
    });
    
    $("#main-content").on("click","#idf-btn",function(event){
        remove_jobs_selected();
        $("#idf-btn").addClass("btn-selected");
        var job_content = $(".job-content");
        job_content.fadeOut(1,function(){
            console.log("faded-in");
        });
        job_content.empty();
        add_job_content(jobs[2]);
        job_content.fadeIn(500,function(){
            console.log("faded-in");
        });
    });


experienceBtn.on("click",function(event){
    remove_stripe_selected();
    experienceBtn.addClass("stripe-btn-selected")
    content.fadeOut(1);
    content.empty();
    add_job_container();
    add_buttons(jobs);
    add_job_content(jobs[0])
    content.fadeIn(500);
});
