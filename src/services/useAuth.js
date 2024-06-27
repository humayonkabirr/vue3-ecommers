import axios from 'axios'
import { computed, reactive, ref } from 'vue'
// import router from "@/router/index";
import setAuthToken from './setAuthToken';


// import { toast } from 'vue3-toastify';
// import 'vue3-toastify/dist/index.css';

const state = reactive({
  authenticated: false,
  user: null
})

export default function useAuth() {
  const errors = ref({})
  const permissions = ref([])
  const logName = ref('Sign In')

  const getAuthenticated = computed(() => state.authenticated)
  const getUser = computed(() => state.user)

  const setAuthenticated = (authenticated) => {
    state.authenticated = authenticated
  }

  const setUser = (user) => {
    state.user = user
  }

  const attempt = async () => {
    try {
      let response = await axios.get('/auth/user')
      setUser(response.data.user)
      setAuthenticated(true)
    } catch (error) {
      console.error('Authentication attempt failed:', error)
      setAuthenticated(false)
      setUser(null)
      localStorage.removeItem('user')
    }
  }

  const login = async (loginInfo) => {
    try {
      if (!localStorage.getItem('token')) {
        await axios.get('https://rahmansoutfit.com/sanctum/csrf-cookie')
        let response = await axios.post('/auth/login', loginInfo)
        // localStorage.setItem('user', JSON.stringify(response.data))
        const token = response.data.access_token
        localStorage.setItem('token', token)
        setAuthToken(token)
        // eslint-disable-next-line no-undef 
        // toast.success("Welcome to visit", {
        //   autoClose: 1000,
        // });
      }

      // await attempt();
      // await router.push("/");
    } catch (error) {
      console.error('Login failed:', error)
      setAuthenticated(false)
      setUser(null)
      localStorage.removeItem('user')
      // Handle specific errors
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors
        logName.value = 'Sign In'
      } else if (error.response && error.response.status === 429) {
        errors.value = error.response.statusText
      }
    }
  }

  const registrationSubmit = async () => {
    try {
      if (!localStorage.getItem('token')) {

        const currentTimestamp = reactive({
          full: Date.now(),
          last11: Date.now() % 1e11
        }); 
        
        
        const registration = reactive({
          name: currentTimestamp.full % 1e11,
          email_or_phone: currentTimestamp.full % 1e11,
          password: currentTimestamp.full % 1e11,
          password_confirmation: currentTimestamp.full % 1e11,
          register_by: "phone"
        });
        
        await axios.get('https://rahmansoutfit.com/sanctum/csrf-cookie')
        let response = await axios.post('/auth/signup', registration)
        // localStorage.setItem('user', JSON.stringify(response.data))
        const token = response.data.access_token
        localStorage.setItem('token', token)
        setAuthToken(token);
      }

      // await attempt();
      // await router.push("/");
    } catch (error) {
      console.error('Login failed:', error)
      setAuthenticated(false)
      setUser(null)
      localStorage.removeItem('user')
      // Handle specific errors
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors
        logName.value = 'Sign In'
      } else if (error.response && error.response.status === 429) {
        errors.value = error.response.statusText
      }
    }
  }

  // const logout = async () => {
  //   try {
  //     await axios.post("/logout");
  //     setAuthenticated(false);
  //     setUser(null);
  //     localStorage.removeItem("user");
  //     await router.push("/login");
  //   } catch (error) {
  //     console.error("Logout failed:", error);
  //   }
  // };

  return {
    login,
    registrationSubmit,
    permissions,
    getUser,
    getAuthenticated,
    attempt,
    logName,
    errors
  }
}
