import Vue from "vue";
// 按需引入elementUI
import { MessageBox,Message, Pagination} from "element-ui";

// 完整引入elementUI
// import ElementUi from 'element-ui';
// Vue.use(ElementUi);

Vue.prototype.$msgBox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

// 使用分页器
Vue.use(Pagination);