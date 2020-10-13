import {
    ref,
} from 'vue';

export const useProduct = () => {

    const products = ref([{
        id: 12232434,
        price: 256.33,
        title: "Product 1"
    }]);

    const createProduct = (title, price) => {
        const newProduct = {
            title,
            price,
            id: Date.now(),
        };
        products.value.push(newProduct);
    };

    const deleteProduct = (productId) => {
        products.value = products.value.filter((p) => p.id !== productId);
    };

    return {
        createProduct,
        deleteProduct,
        products
    };
}