 <template>
  <div id="app">
    <div class="_main_layout">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            isMobileMenu: false,
            scrollY: 0,
        }
    },
    methods:{
        handleScroll(){
            this.scrollY = window.scrollY
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll);
    },
}
</script>
