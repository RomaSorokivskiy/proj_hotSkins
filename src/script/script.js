window.addEventListener('DOMContentLoaded', function(){

    const languageSelector = document.querySelector('.language_selector');
    const languageItem = document.querySelectorAll('.language_item');
    const contactButtons = document.querySelectorAll('.contact_buttons');
    const infoHelp = document.querySelectorAll('.info_help');

    const logIn = document.getElementById('log_in');
    const mainWord = document.getElementById('main_word');
    const connectProj = document.getElementById('connect_proj');

    languageSelector.addEventListener('click', ()=>{
        if(!languageItem[1].classList.contains('select')){
            languageItem[1].classList.add('select');
            languageItem[0].classList.remove('select');
            translationEng();
        }else{
            languageItem[1].classList.remove('select');
            languageItem[0].classList.add('select');
            translationRus();
        }

        function translateText(elemet, text){
            elemet.innerText = `${text}`;
            console.log('work');
        }

        function translationEng(){
            translateText(contactButtons[0], "Help");
            translateText(contactButtons[1], "Contact");
            translateText(logIn,"LogIn");

            translateText(mainWord,"Accept payments from users with CS:GO and DOTA 2 skins");
            translateText(connectProj,"Connect project");

            translateText(infoHelp[0],"Help");
            translateText(infoHelp[1],"Contact");
            translateText(infoHelp[2],"Terms of use");
        }
        function translationRus(){
            translateText(contactButtons[0], "Помощь");
            translateText(contactButtons[1], "Контакты");
            translateText(logIn,"Войти");

            translateText(mainWord,"Принимайте платежи от пользователейс помощью скинов CS:GO и DOTA 2");
            translateText(connectProj,"Подключить проект");

            translateText(infoHelp[0],"Помощь");
            translateText(infoHelp[1],"Контакты");
            translateText(infoHelp[2],"Пользовательское соглашение");
        }
    });
});