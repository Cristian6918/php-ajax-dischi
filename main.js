console.log("js ok");

const app = new Vue({
    el: "#app",
    data() {
        return {
            albums: [],
        }
    },
    mounted() {
        axios.get("http://localhost/php-ajax-dischi/data.php").then((result) => {
            if(result.status===200){
                console.log(result.data)
                this.albums = result.data;
                }
            
        }).catch((err) => {
            console.log(err)
            
        });
    }
})