var bio ={
	"name" : "Isabel Blanco",
	"role" : "Front-End developer",
	"contacts" : {
		"mobile" : "07923 259298",
		"email" : "isabelblancodura@gmail.com",
		"facebook" : "Isabel Blanca",
		"twitter" : "isabel ibaurri",
		"location" : "Southampton",
		"github" : "isabelblancodura"
	},
	"picture" : "images/me.jpg" ,
	"welcomeMessage" : "Hello, can I write some code for you?",
	"skills" :[
		"responsable",
		"hard worker",
		"enthusiastic",
		"friendly"
	],
	"display" : function(){
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		$("#header").prepend(formattedName);

		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		$("#header").prepend(formattedRole);

		var formattedImage = HTMLbioPic.replace("%data%", bio.picture);
		$("#header").append(formattedImage);

		var formattedNumber = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedFacebook = HTMLfacebook.replace("%data%",bio.contacts.facebook);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

		$("#topContacts").append(formattedNumber + formattedEmail + formattedFacebook + formattedLocation);
		$("#footerContacts").append(formattedNumber + formattedEmail + formattedFacebook + formattedLocation);

		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}

		var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedMsg);
	}
};
var work = {
	"jobs" :[
		{
			"employer" : "Costa Coffee",
			"position" : "barista",
			"dates" : "one year and half",
			"location" : "Southampton",
			"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
		},
		{
			"employer" : "Hilton Hotel",
			"position" : "cleaner",
			"dates" : "7 months",
			"location" : "Barcelona",
			"description" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"
		},
	],
	"display" : function() {
		for (var job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].position);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

			$(".work-entry:last").append(formattedEmployerTitle + formattedDate + formattedDescription);
		}
	}
};
var education ={
	"schools" :[
		{
			"name" : "Henry Matisse",
			"location" : "Valencia",
			"degree" : "Media Produccion",
			"onlineInfo" : "www.henrymatisse.com"
		},
		{
			"name" : "La Marxadella",
			"location" : "Torrent",
			"degree" : "Multimedia Produccion",
			"onlineInfo" : "www.lamarxadella.com"
		}
	],
	"online":[
		{
			"title" : "Front End developer Nanodegree",
			"school" : "Udacity",
			"web" : "www.udacity.com",
		},
		{
			"title" : "web development foundamentals",
			"school" : "Hilton University",
			"web": "www.hiltonuniversity.com",
		}
	],
	"display" : function() {
		for (var school in education.schools) {
			$("#education:last").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolWeb = HTMLschoolDates.replace("%data%", education.schools[school].onlineInfo);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolCity + formattedSchoolWeb + "<br>");
		}
		$(".education-entry:last").append(HTMLonlineClasses);

		for (var course in education.online) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[course].school);
			var formattedOnlinedURL = HTMLonlineDates.replace("%data%", education.online[course].web);

			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlinedURL +"<br>");
		}
		for (var school in education.schools) {
			$("#education:last").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolWeb = HTMLschoolDates.replace("%data%", education.schools[school].onlineInfo);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolCity + formattedSchoolWeb + "<br>");
		}
		$(".education-entry:last").append(HTMLonlineClasses);

		for (var course in education.online) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[course].school);
			var formattedOnlinedURL = HTMLonlineDates.replace("%data%", education.online[course].web);

			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlinedURL +"<br>");
		}
	}
};
var projects ={
	"myProjects" :[
		{
			"title" : "Teacher appi",
			"date" : "2014",
			"description" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
			"pictures" :[
				"images/firstProject1.jpg",
				"images/firstProject2.jpg"
			]
		},
		{
			"title" : "portfolio",
			"date" : "2014",
			"description" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
			"pictures"  :[
				"images/secondProject1.jpg",
				"images/secondProject2.jpg"
			]
		}
	],
	"display" : function() {
		for (var project in projects.myProjects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.myProjects[project].title);
			$(".project-entry:last").append(formattedProjectTitle);

			var formattedProjectDate = HTMLprojectDates.replace("%data%",projects.myProjects[project].date);
			$(".project-entry:last").append(formattedProjectDate);

			var formattedProjectDesc = HTMLprojectDescription.replace("%data%",projects.myProjects[project].description);
			$(".project-entry:last").append(formattedProjectDesc);

			if (projects.myProjects[project].pictures.length > 0) {
				for (var image in projects.myProjects[project].pictures) {
					var formattedProjectImg = HTMLprojectImage.replace("%data%",projects.myProjects[project].pictures[image]);
					$(".project-entry:last").append(formattedProjectImg);
				}
			}
		}
		for (var project in projects.myProjects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.myProjects[project].title);
			$(".project-entry:last").append(formattedProjectTitle);

			var formattedProjectDate = HTMLprojectDates.replace("%data%",projects.myProjects[project].date);
			$(".project-entry:last").append(formattedProjectDate);

			var formattedProjectDesc = HTMLprojectDescription.replace("%data%",projects.myProjects[project].description);
			$(".project-entry:last").append(formattedProjectDesc);

			if (projects.myProjects[project].pictures.length > 0) {
				for (var image in projects.myProjects[project].pictures) {
					var formattedProjectImg = HTMLprojectImage.replace("%data%",projects.myProjects[project].pictures[image]);
					$(".project-entry:last").append(formattedProjectImg);
				}
			}
		}
	}
};
$("#mapDiv").append(googleMap);
bio.display();
work.display();
education.display();
projects.display();

