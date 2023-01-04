
// G
// CODE According to specification
function click_filter_element(event) {
  // FUNGERAR!!!
  const classes = ["selected", "unselected"]
  event.addEventListener("click", f1)
  function f1() {
    for (let i = 0; i < event.classList.length; i++) {
      if (event.classList[i] === classes[0]) {
        event.classList.toggle(classes[1])
      };

      if (event.classList[i] === classes[1]) {
        event.classList.toggle(classes[0])
      };
    }
  };
  /*
    ARGUMENTS
      event: event-object created when user clicks on one of the filter elements.

    SIDE-EFFECTS
      Marks the clicked filter element as selected / unselected.
      Since a filter element will have changed after the click, the list of
      programmes must be updated.

      Attention VG
        Careful with the propagation of the click-event

    NO RETURN VALUE

  */

}


// G
// CODE according to specification
function create_filter_element(data) {
  // FUNGERAR!!!
  let create_li = document.createElement("li");
  let parent = data.parent;
  create_li.classList.add(data.class)
  create_li.textContent = data.textContent
  parent.appendChild(create_li);
  click_filter_element(create_li)
  return create_li
}

/*
  ARGUMENTS
    data: object that contains the following keys:
      class (string): a class-name given to the created element
      textContent (string): the text that the element contains
      parent (reference to HTML-element): the HTML-element that is the parent of the created element

    No control of arguments.

  SIDE-EFFECTS
    Creates a new dom-element with the tag "li".
    Gives the new dom-element the class contained in data.class
    Appends the new dom-element to the element referenced in data.parent
    Sets the text content of the new dom-element to data.textContent
    Sets the function click_filter_element as a listener to "click" for the new dom-element

  RETURN VALUE
    Returns a reference to the new dom-element
*/



// VG
// CODE according to specification
function add_group_toggling(filter_container_dom) {

  /*
    ARGUMENT
      filter_container_dom: reference to a HTML-element that contains a set of fliter_elements
            Exempel: the <ul> that contains the filters for Language.

    SIDE EFFECTS
      The function makes sure that when the user clicks on filter_container_dom, all the
      filter_elements that it contains are selected / unselected.
      Since some filter elements will have changed after the click, the list of
      programmes must be updated.

    NO RETURN VALUE

  */

}


// VG
// CODE according to specifications
function toggle_cities(event) {

  /*

    ARGUMENTS
      This function does not take any arguments

    SIDE EFFECTS
      This function checks the state of the first city-filter-element (Madrid).
      If it is selected then it de-selects ALL city-filter-elements
      If it is de-selected then it selects ALL city-filter-elements 

    NO RETURN VALUE

  */

}


// WRITE SPECIFICATION
// ATTENTION: You need to write the specification of all three functions:
//            create_countries_cities_filters, create_country and create_city
function create_countries_cities_filters() {
  /*
        Create_countries_cities_filters
  1. Funktionen deklarerar funktionen create_country som tar emot ett argument i form av ett objekt
     som i sin tur skapar en <div> med en <h1> och <ul> inuti och som får en klass och id.
  2. Funktionen deklarar funktionen create_city som tar emot ett argument i form av ett objekt. 
    Create_city använder sig av create_filter_element för att skapa en <li> som appendas till ett HTML-element.
  3. create_countries_cities_filters använder sig av funktionen array_each för att kontrollera att
     det nya elementets data-attributs värde (dvs countryID) är det samma som elementet i arrayen
  */


  function create_country(country) {
    /*    Create_country funktionen
    1. Funktionen tar emot ett objekt som argument (i detta fallet från database.js).
    
    2. Funktionen sen skapar ett DOM-element (en "div") element som sedan får klasserna "country" 
       och "filter_container".
    
    3. DOM-elementet som har skapats får sedan ett ID som består av strängen "country_" och 
       ett ID-nummer från objektets nyckel: id (från databasen). 
    
    4. Funktionen sedan appendar det nya DOM-elementet som barn till en <ul> som  är barn till #country_filters i HTML-filen.
    
    5. Funktionen lägger till två element inuti det nya DOM-elementet. I detta fallet så läggs till en <h1> och en <ul> inuti. H1:ans innehåll blir det samma som nyckeln "name" i 
        objektet som man har gett som argument. <ul> som har skapats inuti får classen "filter_list".
    
    6. Funktionen deklarerar en variabel som använder sig av funktionen array_filter som tar emot en array och en funktion som argument. Arrayen och funktionen som används som argument
        är CITIES och test_function som deklareras inuti funktionen array_filters.
    
    7. Test_function tar emot ett objekt som argument (i detta fallet ett objekt från CITIES-array) och sedan returnerar ett Booleskt-värde genom att kontrollera om både objekten 
        som har använts i create_country och i test_function har var sin nyckel (city.countryID och country.id) med samma värde. Detta med hjälp av array_filter funktionen för att
        uppfylla kraven som man har angett i test_function.
    */
    const dom = document.createElement("div");
    dom.classList.add("country");
    dom.classList.add("filter_container");
    dom.id = "country_" + country.id;
    document.querySelector("#country_filter > ul").append(dom);

    dom.innerHTML = `
      <h1>${country.name}</h1>
      <ul class="filter_list"></ul>
    `;

    const cities = array_filter(CITIES, test_function);
    function test_function(city) {
      return city.countryID === country.id;
    }

    array_each(cities, create_city);
  }

  function create_city(city) {
    /*
            Create_city funktionen
    
    1. Funktionen tar emot ett objekt som argument.
    
    2. Funktionen deklarerar en variabel som använder create_filter_element tillsammans med ett objekt och dess nycklar som argument som i sin tur skapar en <li>
       med klassen, text-innehåll och förälder som man anger som nycklar i argumentet.
    
    3. Det nya elementet får attributet data-id som har samma värde som nyckeln "id" från objektet som har angivits som argument till create_city.
    
    */

    const dom = create_filter_element({
      parent: document.querySelector(`#country_${city.countryID} > ul`),
      class: "selected",
      textContent: city.name,
    });
    dom.dataset.id = city.id;

  }

  array_each(COUNTRIES, create_country);
}



// G
// ABSTRACT AND WRITE SPECIFICATION
//    As you can see, all three functions below do basically the same thing.
//    Abstract them to one function, and write the specification of that function.
function create_levels_filter() {
  // FUNGERAR!!!
  /*
  
    ARGUMENTS
      The function does not take any arguments.
  
    SIDE EFFECTS
      This function creates list-item elements with and id-number as attribute and 
      text content from the LANGUAGES, LEVELS, and SUBJECTS arrays. The function 
      then appends the list-items as children to the unordered-lists within the different 
      containers i.e level_filter, subject_filter, and language_filter.
  
    NO RETURN VALUE
  
  */

  for (let i = 0; i < LEVELS.length; i++) {
    let dom_level = create_filter_element({
      parent: document.querySelector("#level_filter ul"),
      class: "selected",
      textContent: LEVELS[i].name,
    });
    dom_level.dataset.id = LEVELS[i].id;
  };


  for (let i = 0; i < SUBJECTS.length; i++) {
    let dom_subject = create_filter_element({
      parent: document.querySelector("#subject_filter ul"),
      class: "selected",
      textContent: SUBJECTS[i].name,
    });
    dom_subject.dataset.id = SUBJECTS[i].id;
  };

  for (let i = 0; i < LANGUAGES.length; i++) {
    let dom_language = create_filter_element({
      parent: document.querySelector("#language_filter ul"),
      class: "selected",
      textContent: LANGUAGES[i].name,
    });
    dom_language.dataset.id = LANGUAGES[i].id;
  };
};

// function create_level(level) {
//     const dom = create_filter_element({
//       parent: document.querySelector("#level_filter > ul"),
//       class: "selected",
//       textContent: level.name,
//     });
//     dom.dataset.id = level.id;
//   }
//   array_each(LEVELS, create_level);
// }


// // // // Create Subjects Filter
// function create_subjects_filter() {
//   function create_subject(subject) {
//     const dom = create_filter_element({
//       parent: document.querySelector("#subject_filter > ul"),
//       class: "selected",
//       textContent: subject.name,
//     });
//     dom.dataset.id = subject.id;
//   }
//   array_each(SUBJECTS, create_subject);
// }


// // // // Create Search Field
// function create_language_filter() {
//   function create_element(data) {
//     const dom = create_filter_element({
//       parent: document.querySelector("#language_filter > ul"),
//       class: "selected",
//       textContent: data.name,
//     });
//     dom.dataset.id = data.id;
//   }
//   array_each(LANGUAGES, create_element);
// }



// G / VG (see details in specification)
// CODE according to specifications
function create_programme(programme) {

  // Gör istället att den bara skapar en och sen du loopar funktionen
  // Använd array_funktioner för att kontrollera att levelID i PROGRAMMES är det samma som ID i LEVELS för att få till de rätt.
  function get_random_number(max, min = 0) {
    // Returns a random number between min (inclusive) and max (exclusive)
    return min + Math.floor(max * Math.random());
  }

  // HTML-skaparen färdig.
  // Fixa funktion för informationen ska stämma
  let real_parent = document.querySelector("#programmes ul");
  let create_box = document.createElement("div");
  let create_li = document.createElement("li");
  create_box.style.backgroundImage = `url(./media/geo_images/${CITIES[UNIVERSITIES[programme.universityID].cityID].imagesNormal[get_random_number(CITIES[UNIVERSITIES[programme.universityID].cityID].imagesNormal.length, 0)]}`
  create_box.classList.add("programme");
  create_li.innerHTML = `<h1>${programme.name}</h1><p>${UNIVERSITIES[programme.universityID].name}</p><p>${CITIES[UNIVERSITIES[programme.universityID].cityID].name}, ${COUNTRIES[CITIES[UNIVERSITIES[programme.universityID].cityID].countryID].name}<p>${LEVELS[programme.levelID - 1].name}, ${SUBJECTS[programme.subjectID].name}, ${LANGUAGES[programme.languageID].name}</p>`
  create_box.appendChild(create_li);
  real_parent.appendChild(create_box)
  /*
 
    ARGUMENT
      programme (object): One of the objects from PROGRAMMES
 
    SIDE-EFFECTS
      This function creates the HTML-element that contains all the information
      about one programme, as seen in the video / image.
      
      VG: The background image is a random image from among the images of the city
          in which the programme is (via the university)
      G:  No background image required.
 
 
      VG: The "see more" interaction must be included.
      G:  The "see more" element is not required. And that information needs not be in place.
 
    NO RETURN VALUE
 
  */

};


// G
// CODE according to the specification
function update_programmes() {



  /*
      NO ARGUMENTS
 
      SIDE EFFECTS
        This function updates the programmes shown on the page according to
        the current filter status (which filter elements are selected / unselected).
        It uses the function read_filters to know which programmes need to be included.
 
        VG: The top images (header) need to be updated here
 
      NO RETURN VALUE
 
  */

}


// G
// WRITE SPECIFICATION
// You must understand how this function works. There will be questions about it
// in the code review (kodredovisning)

// Optional VG: Which parts of the function's code could be abstracted?
//              Implement it
function read_filters() {

  const city_selected_dom = document.querySelectorAll("#country_filter li.selected");

  const city_id_selected = [];
  function callback_add_cityID(dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    city_id_selected.push(id_as_integer);
  }
  array_each(city_selected_dom, callback_add_cityID);

  const universities = [];
  for (let i = 0; i < city_id_selected.length; i++) {
    const city_id = city_id_selected[i];
    for (let ii = 0; ii < UNIVERSITIES.length; ii++) {
      const university = UNIVERSITIES[ii];
      if (university.cityID === city_id) {
        universities.push(university);
      }
    }
  }

  let programmes = [];
  function callback_add_programmes(university) {
    const university_id = university.id;
    for (let i = 0; i < PROGRAMMES.length; i++) {
      const programme = PROGRAMMES[i];
      if (programme.universityID === university_id) {
        programmes.push(programme);
      }
    }
  }
  array_each(universities, callback_add_programmes);



  const level_selected_dom = document.querySelectorAll("#level_filter li.selected");
  const level_id_selected = [];
  function callback_add_levelID(dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    level_id_selected.push(id_as_integer);
  }
  array_each(level_selected_dom, callback_add_levelID);

  function test_function_level(programme) {
    return level_id_selected.includes(programme.levelID);
  }
  programmes = array_filter(programmes, test_function_level);



  const language_selected_dom = document.querySelectorAll("#language_filter li.selected");
  const language_id_selected = [];
  function callback_add_languageID(dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    language_id_selected.push(id_as_integer);
  }
  array_each(language_selected_dom, callback_add_languageID);



  function test_function_language(programme) {
    return language_id_selected.includes(programme.languageID);
  }
  programmes = array_filter(programmes, test_function_language);



  const subject_selected_dom = document.querySelectorAll("#subject_filter li.selected");
  const subject_id_selected = [];
  function callback_add_subjectID(dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    subject_id_selected.push(id_as_integer);
  }
  array_each(subject_selected_dom, callback_add_subjectID);



  function test_function_subject(programme) {
    return subject_id_selected.includes(programme.subjectID);
  }
  programmes = array_filter(programmes, test_function_subject);



  const search_string = document.querySelector("#search_field input").value;
  if (search_string !== "") {
    function test_function(programme) {
      return programme.name.includes(search_string);
    }
    programmes = array_filter(programmes, test_function);
  }

  return programmes;
};