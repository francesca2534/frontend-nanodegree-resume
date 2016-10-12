/*
This is empty on purpose! Your code to build the resume will go here.
 */
//var name = "Francesca Mary Peter";
//var role = "Web Developer";

var bio = {
    "name": "Francesca Mary Peter",
    "role": "Web Developer",
    "contacts": {
        "mobile": "8129743689",
        "email": "franmp253@gmail.com",
        "github": "francesca2534",
        "location": "Kerala, India"
    },
    "welcomeMessage": "Your answer for a number of queries",
    "skills": ["Leadership", "Cool", "Hardwork", "Awesomeness"],
    "bioPic": "images/fry.jpg"
};

// Encapsulating the display fuction using dot notation.
bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedmobile);

    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedmobile);

    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedemail); 

    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(formattedemail);

    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedgithub);

	var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedgithub);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedbioPic);

    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedlocation);

    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedlocation);

    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);

    // Display Skills
    $("#header").append(HTMLskillsStart);
    var i = bio.skills.length;
    for (var m = 0; m < i; m++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[m]);
        $("#skills").append(formattedSkill);
    }
};

$("body").append(bio.display);

var work = {
    "jobs": [{
        "title": "Pizza delivery",
        "employer": "Pizza hut",
        "dates": "2012 to 2016",
        "location": "Pune",
        "description": "This was done as a part-time job to fit in all my expenses for entertainment. This was done as a part-time job to fit in all my expenses for entertainment. This was done as a part-time job to fit in all my expenses for entertainment. "
    }, {
        "title": "Pizza delivery",
        "employer": "Dominos",
        "dates": "2016 to present",
        "location": "Mumbai",
        "description": "I did the job while I was sitting idle ay my home after my course completionI did the job while I was sitting idle ay my home after my course completionI did the job while I was sitting idle ay my home after my course completion"

    }]
};

// Encapsulating the display fuction using dot notation.
work.display = function() {
    var i = work.jobs.length;
    for (var m = 0; m < i; m++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[m].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[m].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[m].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[m].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

$("body").append(work.display);

var projects = {
    "projects": [{
        "title": "Project1",
        "dates": "2010 to 2011",
        "description": "Endangered Species",
        "images": "images/project.jpg"
    }, {
        "title": "Project2",
        "dates": "2011 to 2012",
        "description": "Child labor",
        "images": "images/project.jpg"
    }]
};

// Encapsulating the display fuction inside project object using dot notation
projects.display = function() {
    var i = projects.projects.length;
    for (var m = 0; m < i; m++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[m].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[m].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[m].description);
        $(".project-entry:last").append(formattedDescription);
        var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[m].images);
        $(".project-entry:last").append(formattedprojectImage);
    }
};

$("body").append(projects.display);

var education = {
    "schools": [{
        "name": "ISC",
        "location": "Kerala",
        "degree": "+2",
        "majors": "science",
        "dates": "2011 - 2012",
         "url"	: "http://www.cisce.org" 
    }, {
        "name": "M G University",
        "location": "Kerala",
        "degree": "BTech",
        "majors": "civil",
        "dates": "2012 - 2016",
        "url"	: "http://www.mguniversity.edu"
    }],
    "onlineCourses": [{
        "title": "Front End Web Development",
        "school": "Udacity",
        "dates": "2014",
        "url": "http://www.udacity.com"
    }]
};

// Encapsulating the display function in education object using dot notation
education.display = function() {
    // Display schools
    var i = education.schools.length;
    for (var m = 0; m < i; m++) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[m].name);
        $(".education-entry:last").append(formattedschoolName);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[m].degree);
        $(".education-entry:last").append(formattedschoolDegree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[m].dates);
        $(".education-entry:last").append(formattedschoolDates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[m].location);
        $(".education-entry:last").append(formattedschoolLocation);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[m].majors);
        $(".education-entry:last").append(formattedschoolMajor);
    }
    // Display online Courses
    var j = education.onlineCourses.length;
    for (var n = 0; n < j; n++) {
        $(".education-entry:last").append(HTMLonlineClasses);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[n].title);
        $(".education-entry:last").append(formattedonlineTitle);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[n].school);
        $(".education-entry:last").append(formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[n].dates);
        $(".education-entry:last").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[n].url);
        $(".education-entry:last").append(formattedonlineURL);
    }
};

$("body").append(education.display);

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);