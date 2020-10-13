<template>
  <div class="product-form">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="saveProduct">
              <div class="form-group">
                <label
                  for="title"
                  class="text-primary font-weight-bold font-size-sm"
                  >Title</label
                >
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  v-model="inputState.title"
                  placeholder="Product Name"
                />
              </div>
              <div class="form-group">
                <label
                  for="price"
                  class="text-primary font-weight-bold font-size-sm"
                  >Price</label
                >
                <input
                  id="price"
                  type="text"
                  class="form-control"
                  v-model="inputState.price"
                  placeholder="Product Price"
                />
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  :disabled="!isValid"
                  class="btn btn-primary"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch, computed } from "vue";
import { useProduct } from "../comp-function/product";

export default {
  name: "ProductsForm",
  setup() {
    const { createProduct } = useProduct();

    const submitted = ref(false);
    const inputState = reactive({
      title: "",
      price: "",
    });

    // Location Functions
    const saveProduct = () => {
      createProduct(inputState.title, priceAsNumber.value);
      submitted.value = true;
    };

    // Computed Properties
    const priceAsNumber = computed(() => {
      return parseFloat(inputState.price);
    });

    // Validity Computed
    const isValid = computed(() => {
      let isValid = true;
      if (inputState.title.trim().length === 0) {
        isValid = false;
      }
      if (isNaN(priceAsNumber.value) || priceAsNumber.value <= 0) {
        isValid = false;
      }
      return isValid;
    });

    // Watcher
    watch(() => {
      if (submitted.value) {
        inputState.title = "";
        inputState.price = "";
        submitted.value = false;
      }
    });

    return {
      isValid,
      inputState,
      saveProduct,
    };
  },
};
</script>
