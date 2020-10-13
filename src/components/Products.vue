<template>
  <div class="products mt-3">
    <ul class="list-group">
      <pre>{{ products }}</pre>
      <li
        v-for="prod of products"
        :key="prod.id"
        class="list-group-item mt-1"
        @click="removeProduct(prod.id)"
      >
        <h2>{{ prod.title }}</h2>
        <p class="text-muted font-size-lg font-weight-bold">
          Price: ${{ prod.price.toFixed(2) }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { useProduct } from "@/comp-function/product";
export default {
  name: "Products",
  setup() {
    const { products, deleteProduct: removeProduct } = useProduct();
    return {
      products,
      removeProduct,
    };
  },
};
</script>
