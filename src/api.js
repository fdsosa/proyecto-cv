//PERSONAL-DATA
var dataResponse = new XMLHttpRequest();

dataResponse.open('GET', 'http://localhost:3000/api/datos-personales');
dataResponse.send();

dataResponse.addEventListener('readystatechange', function(event){
    var state = dataResponse.readyState;
    var status = dataResponse.status;
    var response = dataResponse.response;

    if(state == 4){
        if(status == 200){
            JSONResponse = JSON.parse(response); 

            var dataContainer = document.getElementById('personal-data');   
            
            //TITLE ELEMENT
            var title1Element = document.createElement('h1');
            var title1Text = document.createTextNode(JSONResponse.name);
            title1Element.appendChild(title1Text);
            dataContainer.appendChild(title1Element);

            //SUBTITLE ELEMENT
            var title4Element = document.createElement('h4');
            var title4Text = document.createTextNode(JSONResponse.profession);
            title4Element.appendChild(title4Text);
            dataContainer.appendChild(title4Element);

            var listElement = document.createElement('ul');

            //PHONE ELEMENT
            var phoneItemElement = document.createElement('li');
            var phoneTitleElement = document.createElement('span');
                phoneTitleElement.style.fontWeight="bold";
            var phoneTitleText = document.createTextNode('Phone: ');
            var phoneValueElement = document.createElement('span');
            var phoneValueText = document.createTextNode(JSONResponse.phone);
            var breaker = document.createElement('br');

            phoneTitleElement.appendChild(phoneTitleText);
            phoneValueElement.appendChild(phoneValueText);

            phoneItemElement.appendChild(phoneTitleElement);
            phoneItemElement.appendChild(breaker);
            phoneItemElement.appendChild(phoneValueElement);

            listElement.appendChild(phoneItemElement);

            //EMAIL ELEMENT
            var emailItemElement = document.createElement('li');
            var emailTitleElement = document.createElement('span');
                emailTitleElement.style.fontWeight="bold";
            var emailTitleText = document.createTextNode('Email: ');
            var emailValueElement = document.createElement('span');
            var emailValueText = document.createTextNode(JSONResponse.email);
            var breaker = document.createElement('br');

            emailTitleElement.appendChild(emailTitleText);
            emailValueElement.appendChild(emailValueText);

            emailItemElement.appendChild(emailTitleElement);
            emailItemElement.appendChild(breaker);
            emailItemElement.appendChild(emailValueElement);

            listElement.appendChild(emailItemElement);

            // BIRTH ELEMENT
            var birthItemElement = document.createElement('li');
            var birthTitleElement = document.createElement('span');
                birthTitleElement.style.fontWeight="bold";
            var birthTitleText = document.createTextNode('Date of Birth: ');
            var birthValueElement = document.createElement('span');
            var birthValueText = document.createTextNode(JSONResponse.birth);
            var breaker = document.createElement('br');

            birthTitleElement.appendChild(birthTitleText);
            birthValueElement.appendChild(birthValueText);

            birthItemElement.appendChild(birthTitleElement);
            birthItemElement.appendChild(breaker);
            birthItemElement.appendChild(birthValueElement);

            listElement.appendChild(birthItemElement);

            dataContainer.appendChild(listElement);
        }
    }
})

//DESCRIPTION DATA
var descResponse = new XMLHttpRequest();

descResponse.open('GET', 'http://localhost:3000/api/description');
descResponse.send();

descResponse.addEventListener('readystatechange', function(event){
    var state = descResponse.readyState;
    var status = descResponse.status;
    var response = descResponse.response;

    if(state == 4){
        if(status == 200){
            JSONResponse = JSON.parse(response); 

            var descContainer = document.getElementById('txt');   

            //TITLE ELEMENT
            var descTitleElement = document.createElement('h2');
            var descTitleValue = document.createTextNode(JSONResponse.title);

            descTitleElement.appendChild(descTitleValue);
            descContainer.appendChild(descTitleElement);

            //TEXT ELEMENT
            var descTextElement = document.createElement('p');
            var descTextValue = document.createTextNode(JSONResponse.text);
          
            descTextElement.appendChild(descTextValue);
            descContainer.appendChild(descTextElement);
        }
    }
})


//SKILLS DATA
var skillsResponse = new XMLHttpRequest();

skillsResponse.open('GET', 'http://localhost:3000/api/skills');
skillsResponse.send();

skillsResponse.addEventListener('readystatechange', function(event){
    var state = skillsResponse.readyState;
    var status = skillsResponse.status;
    var response = skillsResponse.response;

    if(state == 4){
        if(status == 200){
            JSONResponse = JSON.parse(response);
            //Container
            var skillsContainer = document.getElementById('skillsSection');

            // Skills - H2
            var skillsTitleElement = document.createElement('h2');
            var skillsTitleValue = document.createTextNode('Skills');
                skillsTitleElement.appendChild(skillsTitleValue);
                skillsTitleElement.classList.add('title-section');

                skillsContainer.appendChild(skillsTitleElement);

            // HR
            var skillsHrElement = document.createElement('hr');
                skillsHrElement.classList.add('line_skills');  
                
                skillsContainer.appendChild(skillsTitleElement);

            // Table
            var skillsTableElement = document.createElement('table');
                skillsContainer.appendChild(skillsTableElement);

            //Thead
            var skillsTheadElement = document.createElement('thead');
                skillsTableElement.appendChild(skillsTheadElement);

            //Tr
            var skillsTrElement = document.createElement('tr');
                skillsTheadElement.appendChild(skillsTrElement);    
               
            //Th
            var subjThElement = document.createElement('th');
            var subjThValue = document.createTextNode('Subject');
                subjThElement.appendChild(subjThValue);
                skillsTrElement.appendChild(subjThElement);

            var progThElement = document.createElement('th');
            var progThValue = document.createTextNode('Progress');
                progThElement.appendChild(progThValue);
                skillsTrElement.appendChild(progThElement);  
                
            //Tfoot
            var skillsTfootElement = document.createElement('tfoot');
                skillsTableElement.appendChild(skillsTfootElement);            
            
            for(var i = 0; i < JSONResponse.length; i++){
                //Tr
                var trElement = document.createElement('tr');
                    skillsTfootElement.appendChild(trElement);

                //Td
                var tdElement = document.createElement('td');
                var tdValue = document.createTextNode(JSONResponse[i].name);
                    tdElement.appendChild(tdValue);
                    trElement.appendChild(tdElement);
                    
                //Td    
                var tdElement = document.createElement('td');
                    trElement.appendChild(tdElement);
                
                //Divs
                var progContElement = document.createElement('div');
                    progContElement.classList.add('prog-bar-cont');
                    tdElement.appendChild(progContElement);
                
                var progBarElement = document.createElement('div');
                    progBarElement.classList.add('prog-bar');
                    progBarElement.setAttribute('style', 'clip-path: inset(0 ' + JSONResponse[i].value + '% 0 0) !important');
                    progContElement.appendChild(progBarElement);

                var bgBarElement = document.createElement('div');
                    bgBarElement.classList.add('background');
                    progBarElement.appendChild(bgBarElement);

                 
            }
        }
    }
})


//SOCIAL NETWORK DATA
var socialNet =  new XMLHttpRequest();

    socialNet.open('GET', 'http://localhost:3000/api/social-networks');
    socialNet.send();

socialNet.addEventListener('readystatechange', function(event){
    var state    = socialNet.readyState;
    var status   = socialNet.status;
    var response = socialNet.response;

    if(state === 4){
        if(status === 200){
            var socialResponse = JSON.parse(response);
            var socialContainer = document.getElementById('socialContainer');
            
            var socialListElement = document.createElement('ul');
            socialContainer.appendChild(socialListElement);

            for(var i = 0; i < socialResponse.length; i++){

                
                var socialItemElement = document.createElement('li');

                var socialLinkElement = document.createElement('a');
                socialLinkElement.href = socialResponse[i].url;
                socialLinkElement.target = '_blank';

                var socialItalicElement = document.createElement('i');
                socialItalicElement.classList.add('fab');

                socialLinkElement.appendChild(socialItalicElement);
                socialItemElement.appendChild(socialLinkElement);
                socialListElement.appendChild(socialItemElement)
                
                switch (socialResponse[i].name) {

                    case 'Linkedin':
                        socialItalicElement.classList.add('fa-linkedin-in');
                        break;

                    case 'Facebook':
                        socialItalicElement.classList.add('fa-facebook-f');
                        break;

                    case 'Github':
                        socialItalicElement.classList.add('fa-github-alt');
                    break;

                    case 'Instagram':
                        socialItalicElement.classList.add('fa-instagram');
                        break;

                    default:
                        console.log('Error in social network switch');
                }

            }
        }
    }
})    