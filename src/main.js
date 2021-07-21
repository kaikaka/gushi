import { createApp } from 'vue'
import App from './App.vue'
import 'vant/lib/icon/local.css';
import 'vant/lib/index.css';

import { RadioGroup, Radio ,Cell,CellGroup,Icon,Button,Field,Row,Col ,List} from 'vant'
const app = createApp(App)
app.use(Radio)
app.use(RadioGroup)
app.use(Cell)
app.use(CellGroup)
app.use(Icon)
app.use(Button)
app.use(Field)
app.use(Row)
app.use(Col)
app.use(List)
app.mount('#app')