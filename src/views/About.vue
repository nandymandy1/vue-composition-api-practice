<template>
  <div class="calculator-app">
    <h1 class="text-primary">Calculator App</h1>
    <div class="row">
      <div class="col-sm-12 col-md-6 mx-auto">
        <div class="card">
          <div class="card-body">
            <div class="form-group">
              <input
                type="number"
                v-model="state.num1"
                class="form-control"
                placeholder="First Number"
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                v-model="state.num2"
                class="form-control"
                placeholder="Second Number"
              />
            </div>
            <div class="form-group">
              <span class="text-primary">RESULT = </span> {{ state.result }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCalculator } from "../comp-function/calculator";
export default {
  name: "Calculator",
  setup() {
    return {
      ...useCalculator(),
    };
  },
};
</script>
