//2) For the above JSON, Iterate over all for loops
var resume=[{
    "Personal_details":[{
        "Name": "Vijayakumar S",
        "Email": "vijaykumaryoyo8@gmail.com",
        "Phone": "789****352",
        "Degree": "B.E",
        "Location": {"Address": "4th main 2nd cross chamrajpet",
        "Postalcode": 560018,
        "City": "Bengalore",
        "State": "Karnataka",
        "Country": "India"
    },
}],
      "Profile":[{
        "Website": "https://www.linkedin.com/in/vijaya-kumar-298554253",
        "github": "https://github.com/Vijaya-kumar789",
        }],
 
    "Education": [{
      "Institution": "Nelliandavar Institution of Technology",
      "Department": "Civil",
      "StudyType": "fulltime",
      "Batch start year": 2021,
      "Batch end year": 2024,
    }
  ],
  "Skills": [{
      "Name": "Basic python,Basic javascript",
      "Level": "Beginer",
    }],
"Languages": [{
          "Language": "Tamil,Enlish,Kannada,Telugu",
        }
      ],
     
}];
//for loop
for (var i = 0;i<resume.length;i++){
    var obj = resume[i];
}
console.log(obj);
//for In
for (var key in resume){
    if(resume.hasOwnProperty(key)){
        console.log(resume[key]);
    }
}
//for Of
for (var i of resume){
    console.log(i);
    }
//for Each
resume.forEach(function(obj) { console.log(obj)});