import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'

const Alert = {
    install(Vue, options) {
        Vue.use(VueSweetalert2);

        Vue.$alert = (type, message) => {
            if (type === "success") {
                Vue.swal("Success", message, type);
            } else if (type === "info") {
                Vue.swal("Info", message, type);
            } else if (type === "error") {
                Vue.swal("Error", message, type);
            }
        }
    }
}

export default Alert