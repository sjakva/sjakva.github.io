let profile = {
    "firstName": "Shoaib",
    "lastName" : "Jakvani",
    "address"  : "Romeoville, IL 60446",
    "phoneNum" : "(312) 532-1938",
    "email"    : "JakvaniShoaib@gmail.com",
    "projects" : [
        {
            "name": "Confirmed COVID-19 Cases App ",
            "repoURL": "https://github.com/sjakva/it202-project4",
            "liveURL": "https://sjakva.github.io/it202-project4/",
            "description": "Demo of an app that reports confirmed COVID-19 cases per country.",
            "bulletPoints": ["val1", "val2", "val3"]
        },
        {
            "name": "Canvas Scrolling Game",
        }
    ]
}

    // loop through profile data object and update template
//console.log(profile['firstName']+ " " + profile['lastName']);
    // easier to modify template for name, address, email, etc than to write complex selectors