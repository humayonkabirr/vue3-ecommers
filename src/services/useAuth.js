import axios from 'axios'
import { computed, reactive, ref } from 'vue'
// import router from "@/router/index";

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
      if (localStorage.getItem('user')) {
        await axios.get('https://rahmansoutfit.com/sanctum/csrf-cookie')
        let response = await axios.post('/auth/login', loginInfo)
        localStorage.setItem('user', JSON.stringify(response.data))
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
    permissions,
    getUser,
    getAuthenticated,
    attempt,
    logName,
    errors
  }
}
