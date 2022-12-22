const MyApp= {
    data(){
        return {
            name: "",
            personagens: [],
        };
    },
    mounted(){
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => 
            response.json()
        ).then((data) => (this.personagens =data.results));
    },
    methods:{
        search(){
            fetch(`https://rickandmortyapi.com/api/character?name=${this.name}`)
            .then(response => 
                response.json()
            ).then((data) => (this.personagens = data.results));
        }
    }
};

const changeThemeBtn = document.querySelector("#change-theme");

//Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");

}

// load light or dark mode
function loadTheme() {
    const darkMode = localStorage.getItem("dark");

    if(darkMode) {
        toggleDarkMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", function() {
    toggleDarkMode();
})

//save or remove dark mode

    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    }

Vue.createApp(MyApp).mount('#app')