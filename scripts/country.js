class Country {
    constructor(name, lang, greeting, colors, flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }
    Display() {
        //change text
        if (this.name === "Egypt" || this.name === "USA")
        {
            let allh2 = document.querySelectorAll("h2");
            for (let i = 0; i < allh2.length; i++)
            {
                allh2[i].style.color = "white";
            }
        }
        else {
            let allh2 = document.querySelectorAll("h2");
            for (let i = 0; i < allh2.length; i++)
            {
                allh2[i].style.color = "black";
            }
        }

        document.getElementById("CountryName").innerText = this.name;
        document.getElementById("OfficialLanguage").innerText = this.lang;
        document.getElementById("HelloWorld").innerText = this.greeting;

        //change css
        document.getElementById("Color1").style.backgroundColor = this.colors[0];
        document.getElementById("Color2").style.backgroundColor = this.colors[1];

        if (this.colors.length > 2) {
            document.getElementById("Color3").style.backgroundColor = this.colors[2];
        }
        else {
            document.getElementById("Color3").style.backgroundColor = this.colors[1];
        }

        //change flag
        document.getElementById("flag").src = this.flag;
    }
}

let usa = new Country("USA", "Murican", "USA! USA! USA! USA!", ["#b22234", "#fff", "#3c3b6e"], 'img/usaflag.png');
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["#ce1126", "#fff", "#006847"], 'img/mexicoflag.png');
let japan = new Country("Japan", "Japanese", "Kon'nichiwa sekai", ["#be0029", "#fff"], 'img/japanflag.png');
let egypt = new Country("Egypt", "Arabic", "Marhabaan bialealam", ["#ce1126", "#fff", "#000"], 'img/egyptflag.png');
let algeria = new Country("Algeria", "Arabic and Berber", "Marhabaan bialealam", ["#007a33", "#fff", "#c8102e"], 'img/algeriaflag.png');

let countries = [usa, mexico, japan, egypt, algeria];

function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        country.Display();
    }
    else if (input === "Mexico") {
        country = mexico;
        country.Display();
    }
    else if (input === "Japan") {
        country = japan;
        country.Display();
    }
    else if (input === "Egypt") {
        country = egypt;
        country.Display();
    }
    else if (input === "Algeria") {
        country = algeria;
        country.Display();
    }
}