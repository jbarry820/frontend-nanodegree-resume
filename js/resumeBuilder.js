var bio = {
	"name": "Jim Barry",
	"role": "Web Developer",
	"contacts": {
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

function displayBio() {
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

	var welcomeMessage = bio.welcomeMessage;
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
	$("#header").prepend(formattedWelcomeMsg);

	var pictureUrl = bio.pictureUrl;
	var formattedPic = HTMLbioPic.replace("%data%", pictureUrl);
	$("#header").prepend(formattedPic);

	var presentlocation = bio.contacts.location;
	var formattedPresentLocation = HTMLlocation.replace("%data%", presentlocation);
	$("#topContacts").prepend(formattedPresentLocation);

	var twitter = bio.contacts.twitter;
	var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
	$("#topContacts").prepend(formattedTwitter);

	var github = bio.contacts.github;
	var formattedGithub = HTMLgithub.replace("%data%", github);
	$("#topContacts").prepend(formattedGithub);

	var email = bio.contacts.email;
	var formattedEmail = HTMLemail.replace("%data%", email);
	$("#topContacts").prepend(formattedEmail);

	var mobile = bio.contacts.mobile;
	var formattedMobile = HTMLmobile.replace("%data%", mobile);
	$("#topContacts").prepend(formattedMobile);

	var role = bio.role;
	var formattedRole = HTMLheaderRole.replace("%data%", role);
	$("#header").prepend(formattedRole);

	var bioname = bio.name;
	var formattedName = HTMLheaderName.replace("%data%", bioname);
	$("#header").prepend(formattedName);

	}

displayBio();

/*var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);

var bioname = bio.name;
var formattedName = HTMLheaderName.replace("%data%", bioname);
$("#header").prepend(formattedName);*/

var work = {
	"jobs": [
		{
			"Department": "Service Order Center, Desktop Design Team",
			"title": "Designer",
			"employer": "AT&T",
			"dates": "Nov 2015 to Present",
			"location": "Cottondale, AL",
			"description": "This job involves the same thing as my previous job, but involved a larger geographical area of 5 southeastern states."

		},
		{
			"Department": "Service Order Center",
			"title": "Service Order Manager",
			"employer": "AT&T",
			"dates": "December 2011 to Nov 2015",
			"location": "Cottondale, AL",
			"description": "In this job I was working with the AT&T televison servise called UVerse. When customers ordered UVerse service and there was not any cable or fiber to the customer, I had determine what was needed and have jobs designed accordingly."
		},
		{
			"Department": "PLS Group",
			"title": "Quality Support",
			"employer": "AT&T",
			"dates": "October 2010 to December 2011",
			"location": "Cottondale, AL",
			"description": "In this job I did quality checking on Project LightSpeed (PLS) engineering jobs that had been designed by contractors."
		},
		{
			"Department": "Network Engineering",
			"title": "BAU Engineer",
			"employer": "AT&T",
			"dates": "March 2008 to October 2010",
			"location": "Cottondale, AL",
			"description": "This job involved the day to day Business As Usual Outside Plant Engineering in AT&T."
		},
		{
			"Department": "Network Engineering",
			"title": "Network Technical Manager",
			"employer": "AT&T",
			"dates": "2000 to March 2008",
			"location": "Birmingham, AL",
			"description": "This job was doing the same thing I did with EDS, except I was now employed by AT&T."
		},
		{
			"title": "IT Support",
			"employer": "EDS",
			"dates": "1997 to 2000",
			"location": "Birmingham, AL",
			"description": "This job involved desktop support at BellSouth. This was software and hardware support in the Engineering area."
		},
		{
			"title": "IT Desktop Support",
			"employer": "Michelin Tire Corporation",
			"dates": "1995 to 1997",
			"location": "Tuscaloosa, AL",
			"description": "This job involved everything that touched desktop users. I did everything including software support, wiring, networking and managing the switches."
		},
		{
			"Department": "Engineering",
			"title": "Engineer",
			"employer": "Michelin Tire Corporation",
			"dates": "1986 to 1995",
			"location": "Tuscaloosa, AL",
			"description": "As an Engineer in the tire plant, I designed and supervised various jobs involving equipment in the tire plant. Much of the design work involved CAD design using AutoCad."
		},
		{
			"Department": "Production",
			"title": "Tire Scheduler",
			"employer": "Michelin Tire Corporation",
			"dates": "1984 to 1986",
			"location": "Tuscaloosa, AL",
			"description": "As a Tire Scheduler I ordered material for the building of tires based on what tires were needed."
		},
		{
			"Department": "Production",
			"title": "Production Supervisor",
			"employer": "Michelin Tire Corporation",
			"dates": "1983 to 1984",
			"location": "Tuscaloosa, AL",
			"description": "As a Production Supervisor I supervised people in the building of tires."
		}
	]
};

function displayWork() {
	var len = work.jobs.length;
	for (var i = 0; i < len; i++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();


var education = {
	"schools": [
	{
		"name": "University of Central Florida",
		"location": "Orlando, FL, US",
		"degree": "BA",
		"major": "Psychology",
		"dates": "1970 to 1974"
	},
	{
		"name": "University of Alabama",
		"location": "Tuscaloosa, AL, US",
		"degree": "BS",
		"major": "Mechanical Engineering",
		"dates": "1979 to 1983"
	}
	],
	"certifications": [
	{
		"company": "Novell",
        "certification": "Certified Novell Engineer",
        "date": 1996,
        "url": "www.novell.com"
	},
	{
		"company": "Microsoft",
		"certification": "Microsoft Certified Systems Engineer",
		"date": 1997,
		"url": "www.microsoft.com"
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

function displayEducation() {
	var len = education.schools.length;
	for (var i = 0; i < len; i++) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		var formattedSchoolDegree = formattedSchoolName + formattedDegree;
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedMajor);
		$(".education-entry:last").append(formattedSchoolLocation);
	}
}

displayEducation();

function displayOnlneCourses() {
	$("#education").append(HTMLonlineClasses);
	var len = education.onlineCourses.length;
	for (var i = 0; i < len; i++) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		var formattedCertifiedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var formattedTitleSchool = formattedOnlineTitle + formattedCertifiedSchool;
		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedTitleSchool);
		$(".education-entry:last").append(formattedOnlineDate);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

displayOnlneCourses();

function displayCertifications() {
	$("#education").append(HTMLCertification);
	var len = education.certifications.length;
	for (var i = 0; i < len; i++) {
		$("#education").append(HTMLschoolStart);
		var formattedCertificationTitle = HTMLCertificationTitle.replace("%data%", education.certifications[i].certification);
		var formattedCertifiedCompany = HTMLCertificationCompany.replace("%data%", education.certifications[i].company);
		var formattedCertAndCompany = formattedCertificationTitle + formattedCertifiedCompany;
		var formattedCertDate = HTMLCertificationDates.replace("%data%", education.certifications[i].date);
		var formattedCertUrl = HTMLCertificationURL.replace("%data%", education.certifications[i].url);
		$(".education-entry:last").append(formattedCertAndCompany);
		$(".education-entry:last").append(formattedCertDate);
		$(".education-entry:last").append(formattedCertUrl);
	}
}

displayCertifications();

var projects = {
	"designs": [
	  {
	  	"title": "About Me",
	  	"projectdates": "2015",
	  	"description": "A simple first web page with a short bio about me.",
	  	"images": [
	  		"images/apprentice.jpg"
	  	]
	  },
	  {
	  	"title": "Build a Portfolio Site",
	  	"projectdates": "2015",
	  	"description": "A web site showing my portfolio.",
	  	"images": [
	  		"images/BeeWebSite.jpg"
	  	]
	  }
	]
};

projects.display = function() {
	var len = projects.designs.length;
	for (var i = 0; i < len; i++) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.designs[i].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.designs[i].projectdates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.designs[i].description);
		$(".project-entry:last").append(formattedProjectDescription);

		if (projects.designs[i].images.length > 0) {
			var lent = education.certifications.length;
			for (var j = 0; j < lent; j++) {
			//for (var image in projects.designs[i].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.designs[i].images[j]);
			$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

