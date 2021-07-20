import { createApp } from 'vue'
import App from './App.vue'
import { RadioGroup, Radio ,Cell,CellGroup,Icon} from 'vant'
const app = createApp(App)
app.use(Radio)
app.use(RadioGroup)
app.use(Cell)
app.use(CellGroup)
app.use(Icon)
app.mount('#app')