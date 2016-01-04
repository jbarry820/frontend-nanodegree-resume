var bio = {
	"name": "Jim Barry",
	"role": "Web Developer",
	"contactInfo": {
		"mobile": "205-886-7517",
		"email": "jb9449@att.com",
		"github": "jbarry820",
		"twitter": "jbarry820",
		"location": "Cottondale, AL"
	},
	"welcomeMessage": "Welcome to Jim Barry's Resume.",
	"pictureUrl": "images/Jim_picture.jpg",
	"skills": ["Python Programming", "Web Development", "JavaScript", "Computer Networking"]
};

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);

}

var work = {
	"jobs": [
		{
			"Department": "Service Order Center",
			"title": "Designer",
			"employer": "AT&T",
			"dates": "Nov 2015 to Present",
			"city": "Cottondale, AL",
			"description": "fjkal;jftieqpvture9wvmturieqpnvhti"

		},
		{
			"Department": "Service Order Center",
			"title": "Service Order Manager",
			"employer": "AT&T",
			"dates": "December 2011 to Nov 2015",
			"city": "Cottondale, AL",
			"description": "fjkal;jftieqpvture9wvmturieqpnvhti"
		},
		{
			"Department": "PLS Group",
			"title": "Quality Support",
			"employer": "AT&T",
			"dates": "October 2010 to December 2011",
			"city": "Cottondale, AL",
			"description": "fjkal;jftieqpvture9wvmturieqpnvhti"
		},
		{
			"Department": "Network Engineering",
			"title": "BAU Engineer",
			"employer": "AT&T",
			"dates": "March 2008 to October 2010",
			"city": "Cottondale, AL",
			"description": "fjkal;jftieqpvture9wvmturieqpnvhti"
		},
		{
			"Department": "Network Engineering",
			"title": "Network Technical Manager",
			"employer": "AT&T",
			"dates": "2000 to March 2008",
			"city": "Birmingham, AL",
			"description": "fjkal;jftieqpvture9wvmturieqpnvhti"
		},
		{
			"title": "IT Support",
			"employer": "EDS",
			"dates": "1997 to 2000",
			"city": "Birmingham, AL",
			"description": "fjkal;jftieqpvture9wvmturieqpnvhti"
		},
		{
			"title": "IT Support",
			"employer": "Michelin Tire Corporation",
			"dates": "1995 to 1997",
			"city": "Tuscaloosa, AL",
			"description": "fjkal;jftieqpvture9wvmturieqpnvhti"
		},
		{
			"Department": "Engineering",
			"title": "Engineer",
			"employer": "Michelin Tire Corporation",
			"dates": "1985 to 1995",
			"city": "Tuscaloosa, AL",
			"description": "fjkal;jftieqpvture9wvmturieqpnvhti"
		},
		{
			"Department": "Production",
			"title": "Tire Scheduler",
			"employer": "Michelin Tire Corporation",
			"dates": "1985 to 1995",
			"city": "Tuscaloosa, AL",
			"description": "fjkal;jftieqpvture9wvmturieqpnvhti"
		},
		{
			"Department": "Production",
			"title": "Production Supervisor",
			"employer": "Michelin Tire Corporation",
			"dates": "1985 to 1995",
			"city": "Tuscaloosa, AL",
			"description": "fjkal;jftieqpvture9wvmturieqpnvhti"
		}
	]
};

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();


var education = {
	"schools": [
	{
		"name": "University of Central Florida",
		"city": "Orlando, FL, US",
		"degree": "BA",
		"major": "Psychology",
		"year": 1974
	},
	{
		"name": "University of Alabama",
		"city": "Tuscaloosa, AL, US",
		"degree": "BS",
		"major": "Mechanical Engineering",
		"year": 1983
	}
	],
	"certifications": [
	{
		"company": "Novell",
        "certification": "Certified Novell Engineer",
        "year": 1996
	},
	{
		"company": "Microsoft",
		"certification": "Microsoft Certified Systems Engineer",
		"year": 1997
	}
	],
	"onlineCourses": [
	{
		"title": "Intro to Computer Programming",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
	},
	{
		"title": "Front-End Web Developer",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
	]
};

var projects = {
	"projects": [
	  {
	  	"title": "Project 0: About Me",
	  	"dates": "2015",
	  	"description": "A simple first web page with a short bio about me.",
	  	"url": "http://www.jimbarry.net/short_bio"
	  },
	  {
	  	"title": "Project 1: Project 1: Build a Portfolio Site",
	  	"dates": "2015",
	  	"description": "A web site showing my portfolio.",
	  	"url": "http://www.fostersbees.com"
	  }
	]
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$("project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$("project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project.images]) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

var mobile = bio.contactInfo.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);

var email = bio.contactInfo.email;
var formattedEmail = HTMLemail.replace("%data%", email);

var github = bio.contactInfo.github;
var formattedMobile = HTMLgithub.replace("%data%", github);

var pictureUrl = bio.pictureUrl;
var formattedPic = HTMLbioPic.replace("%data%", pictureUrl);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", welcomeMessage);

//var formattedJobs = HTMLworkStart.replace("%data%", "Jobs");

var employer = work.jobs[0].employer;
var formattedEmployer = HTMLworkEmployer.replace("%data", employer);

//-------------------

var outsideExample = "First string";
function example() {
    var outsideExample = "Second string";
}
example();
console.log(outsideExample); // "First string"

var outsideExample = "First string";
function example() {
    outsideExample = "Second string";
}
example();
console.log(outsideExample); // "Second string"

//-------------------

$("#header").prepend(formattedWelcomeMsg);
$("#header").prepend(formattedPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);




