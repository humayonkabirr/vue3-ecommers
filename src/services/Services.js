import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

// import trumpetSfx from "@/assets/sounds/product_add.mp3";
// import trumpetSfx from "@/assets/sounds/1secondton_87a501f05076308.mp3";

export default function ServiceCall() {
  // Access the router instance
  const router = useRouter();

  const errors = ref({});
  const status = ref("Create Page");
  const resData = ref([]); 
  const resCateData = ref([]); 
  const resGeteatured = ref([]); 
  const resBestSelling = ref([]); 
  const resSliders = ref([]); 
  const resProdcutDeteails = ref([]); 
  const resProductsPelated = ref([]); 

  const storeDate = async (url, data) => {
    try {
      // await axios.get("/sanctum/csrf-cookie");
      let response = await axios.post("/api/admin/v1/"+url, data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      status.value = "Create Page";

      if (response.data.status === 422) {
        // console.log(response.data.errors);
        errors.value = response.data.errors;
        // var audio = new Audio(trumpetSfx);
        // audio.play();

        // Swal.fire({
        //   icon: "error",
        //   title: "Oops!! Validation Error Boss",
        //   text: "Please Fill in The Required Fields!",
        // });
      } else if (response.data.status === 500) {
        // console.log(response.data);
        // var audio = new Audio(trumpetSfx);
        // audio.play();
        // await router.push("/error");
      } else {
        // Swal.fire({
        //   position: "center",
        //   icon: "success",
        //   title: "Success",
        //   text: response.data.message,
        //   showConfirmButton: false,
        //   timer: 2500,
        // });

         
        await router.back();
      }
    } catch (e) {
      console.log(e);
      // await router.push("/error");
    }
  };

  const getData = async (url) => { 
    try {
      resData.value = [];
      let response = await axios.get(url); 
      resData.value = response.data;
      console.log(response.data);
    } catch (e) {
      console.log(e);
      // await router.push("/error");
    }
  };

  const getCategory = async (url) => { 
    try {
      resCateData.value = [];
      let response = await axios.get(url); 
      resCateData.value = response.data;
      // console.log(response.data);
    } catch (e) {
      console.log(e);
      // await router.push("/error");
    }
  };

  const getProductsFeatured = async (url) => { 
    try {
      resGeteatured.value = [];
      let response = await axios.get(url); 
      resGeteatured.value = response.data;
      // console.log(response.data);
      // console.log(resGeteatured);
    } catch (e) {
      console.log(e);
      // await router.push("/error");
    }
  };

  const getProductsBestseller = async (url) => { 
    try {
      resBestSelling.value = [];
      let response = await axios.get(url); 
      resBestSelling.value = response.data;
      console.log(response.data);
      // console.log(resBestSelling);
    } catch (e) {
      console.log(e);
      // await router.push("/error");
    }
  };

  const getSliders = async (url) => { 
    try {
      resSliders.value = [];
      let response = await axios.get(url); 
      resSliders.value = response.data;
      // console.log(response.data);
      // console.log(resSliders);
    } catch (e) {
      console.log(e);
      // await router.push("/error");
    }
  };

  const getProdcutDeteails = async (url) => { 
    try {
      resProdcutDeteails.value = [];
      let response = await axios.get("products/"+url); 
      resProdcutDeteails.value = response.data.data;
      console.log(response.data.data);
      // console.log(resProdcutDeteails);
    } catch (e) {
      console.log(e);
      // await router.push("/error");
    }
  };

  const getProductsPelated = async (url) => { 
    try {
      resProductsPelated.value = [];
      let response = await axios.get("products/related/"+url); 
      resProductsPelated.value = response.data.data;
      console.log(response.data.data);
      // console.log(resProductsPelated);
    } catch (e) {
      console.log(e);
      // await router.push("/error");
    }
  };

  return { getProductsPelated, resProductsPelated, getProdcutDeteails,resProdcutDeteails, getSliders,resSliders, getProductsBestseller, resBestSelling, storeDate, getData, resData,resCateData,getProductsFeatured, resGeteatured, getCategory, status, errors };
}