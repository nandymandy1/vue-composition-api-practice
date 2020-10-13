import {
    reactive,
    computed
} from "vue";
export const useCalculator = () => {
    let state = reactive({
        num1: 0,
        num2: 0,
        result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
    });

    return {
        state,
    };
}