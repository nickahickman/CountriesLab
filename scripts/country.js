class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["#b22234", "white", "#3c3b6e"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let japan = new Country("Japan", "Japanese", "Kon'nichiwa sekai", ["red", "white"]);
let egypt = new Country("Egypt", "Arabic", "Sup", ["red", "white", "black"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]);

let countries = [usa, mexico, japan, egypt, algeria];

function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Japan") {
        country = japan;
    }
    else if (input === "Egypt") {
        country = egypt;
    }
    else if (input === "Algeria") {
        country = algeria;
    }

    //change text
    document.getElementById("CountryName").innerText = country.name;
    document.getElementById("OfficialLanguage").innerText = country.lang;
    document.getElementById("HelloWorld").innerText = country.greeting;

    //change css
    document.getElementById("Color1").style.backgroundColor = country.colors[0];
    document.getElementById("Color2").style.backgroundColor = country.colors[1];

    if (country.colors.length > 2) {
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
    }
    else {
        document.getElementById("Color3").style.backgroundColor = country.colors[1];
    }
    
}