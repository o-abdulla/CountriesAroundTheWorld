class Country {
    constructor(name, lang, greeting, colors, image) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.image = image;
    }

    DisplayColors(){
        let colorNode = document.querySelector("#Color1");
        colorNode.style.backgroundColor = this.colors[0];
        //document.querySelector("body").style.backgroundColor = this.colors[0];

        let colorTwoNode = document.querySelector("#Color2");
        colorTwoNode.style.backgroundColor = this.colors[1];

        let colorThreeNode = document.querySelector("#Color3");
        colorThreeNode.style.backgroundColor = this.colors[2];

        let countryNode = document.querySelector("#CountryName");
        countryNode.innerText = this.name;

        let languageNode = document.querySelector("#OfficialLanguage");
        languageNode.innerText = this.lang;

        let greetingNode = document.querySelector("#HelloWorld");
        greetingNode.innerText = this.greeting;

        let imgNode = document.querySelector("#image");
        imgNode.setAttribute("src", this.image);

    }

}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "https://cdn.britannica.com/73/2573-004-29818847/Flag-Mexico.jpg");
let algeria = new Country("Algeria", "Arabic and Berber", "مرحبا بالعالم", ["green", "white", "red"], "https://cdn11.bigcommerce.com/s-w6fxwapwzi/images/stencil/640w/products/2696/5578/2x3-algeria-flag-image__35437.1582736326.jpg?c=1");




function SwitchCountry() {
    let input = document.querySelector("#CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        country.DisplayColors();

    }
    else if (input === "Mexico") {
        country = mexico;
        country.DisplayColors();
    }
    else if (input === "Algeria") {
        country = algeria;
        country.DisplayColors();
    }

}

