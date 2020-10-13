<template>
  <div class="home my-5">
    <div class="user-info mb-4">
      <button @click="toggle" class="btn btn-secondary btn-md mb-3">
        {{ show ? "Hide" : "Show" }}
      </button>
      <p v-if="show">You are now logged in.</p>
    </div>
    <ProductForm />
    <Products />
  </div>
</template>

<script>
import Products from "@/components/Products.vue";
import { useToggle } from "@/comp-function/toggle";
import ProductForm from "@/components/ProductForm.vue";

export default {
  name: "Home",
  components: {
    Products,
    ProductForm,
  },
  setup() {
    return {
      ...useToggle(),
    };
  },
};
</script>
