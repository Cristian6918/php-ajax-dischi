console.log("js ok");


const app = new Vue({
    el: "#app",
    data() {
        return {
            albums: [],
            albumGenres: [],
            selected: "All",
        }
    },
    mounted() {
        this.loadData();
        
       
       
    },
    methods: {

        
        loadData() {
            axios.get("http://localhost/php-ajax-dischi/dataApi.php").then((result) => {
                if (result.status === 200) {
                    this.albums = result.data;
                    this.albums.forEach(element => {
                        if (!this.albumGenres.includes(element.genre)) {
                            this.albumGenres.push(element.genre);
                        }
                    })
                
                }
            
            }).catch((err) => {
                console.log(err)
            
            });
            
        },
        onChange(event) {
            this.selected=event.target.value;
            
        }

        

    },
    computed: {
        filteredList() {
            if (this.selected === "All") {
                return this.albums;
            } else {
                return this.albums.filter((item) => item.genre===this.selected)
            }

      }
    }
   
});

