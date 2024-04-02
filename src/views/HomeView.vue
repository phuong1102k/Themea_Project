<template>
  <!-- main -->
  <main>
    <!-- benefit n bar -->
    <BenifitBar></BenifitBar>

    <!-- banner -->
    <TheBanner></TheBanner>

    <!-- Daily deal -->
    <DailyDeal :productList="productList"></DailyDeal>

    <!-- Lookbook -->
    <LookBook></LookBook>

    <!-- popular product -->
    <PopularProducts :productList="productList"></PopularProducts>

    <!-- bundle and save -->
    <BundleNSave :productBundle="productList[0]"></BundleNSave>

    <!-- summer sale -->
    <SummerSale></SummerSale>

    <!-- shop product type -->
    <ProductType></ProductType>

    <!-- Shop by Skin Concern -->
    <!-- <ConcernShop></ConcernShop> -->

    <!-- Ingredients -->
    <IngredientShop></IngredientShop>

    <!-- blog -->
    <BlogList></BlogList>

    <!-- review -->
    <ReviewList></ReviewList>

    <!-- question -->
    <QuestionSlide></QuestionSlide>

    <!-- advertisement -->
    <AdvertiseList></AdvertiseList>

    <!-- email -->
    <ContactEmail></ContactEmail>
  </main>
</template>

<script>
// @ is an alias to /src

import BenifitBar from "@/components/BenifitBar.vue";
import TheBanner from "@/components/TheBanner.vue";
import DailyDeal from "@/components/DailyDeal.vue";
import LookBook from "@/components/LookBook.vue";
import PopularProducts from "@/components/PopularProducts.vue";
import BundleNSave from "@/components/BundleNSave.vue";
import SummerSale from "@/components/SummerSale.vue";
import ProductType from "@/components/ProductType.vue";
// import ConcernShop from "@/components/ConcernShop.vue";
import IngredientShop from "@/components/IngredientShop.vue";
import BlogList from "@/components/BlogList.vue";
import ReviewList from "@/components/ReviewList.vue";
import QuestionSlide from "@/components/QuestionSlide.vue";
import AdvertiseList from "@/components/AdvertiseList.vue";
import ContactEmail from "@/components/ContactEmail.vue";

import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "HomeView",
  components: {
    BenifitBar,
    TheBanner,
    DailyDeal,
    LookBook,
    PopularProducts,
    BundleNSave,
    SummerSale,
    ProductType,
    // ConcernShop,
    IngredientShop,
    BlogList,
    ReviewList,
    QuestionSlide,
    AdvertiseList,
    ContactEmail,
  },

  setup() {
    const store = useStore();
    store.dispatch("auth/loadUserLoginFromLocalStorageAction");

    store.dispatch("products/getProductListAction");
    const productList = computed(() => store.state.products.productList);
    // const productBundle = productList.value[0];

    return {
      productList,
    };
  },
};
</script>
