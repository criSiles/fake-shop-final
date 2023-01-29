import { createStore } from "vuex";
import auth from "@/api/auth";
import { User } from "@/models/user";
import { Product } from "@/models/product";

interface State {
  products: Product[];
  user: User;
  token: string;
}

export default createStore<State>({
  state: {
    products: [] as Product[],
    user: {
      id: 0,
      name: "",
      email: "",
      role: "",
      avatar: "",
      createdAt: "",
      updatedAt: "",
    } as User,
    token: "",
  },
  getters: {
    getUser(state: { user: User }) {
      return state.user;
    },
    getProducts(state: { products: Product[] }) {
      return state.products;
    },
    getOneProduct: (state: { products: Product[] }) => (id: number) => {
      if (typeof id !== "number") {
        id = parseInt(id);
      }
      let product2Find: Product | undefined = undefined;
      product2Find = state.products.find((product) => product.id === id);
      return product2Find;
    },
    getLoginToken(state: { token: string }) {
      console.log("Get token from state", state.token);
      return state.token;
    },
  },
  mutations: {
    setUser(state, user) {
      Object.assign(state.user, user);
    },
    setProducts(state, products) {
      state.products = products;
    },
    setLoginToken(state, token) {
      state.token = token;
      console.log("Token saved in state", state.token);
    },
  },
  actions: {
    async requestUser({ commit }) {
      auth.getUserByToken().then((response) => {
        commit("setUser", response.data);
      });
    },
    async requestProducts({ commit }) {
      auth.getAllProducts().then((response) => {
        commit("setProducts", response.data);
      });
    },
    async requestLoginAndSetToken({ commit }, { email, password }) {
      auth.login(email, password).then((response) => {
        // Set token to the local storage to avoid losing it on page refresh
        auth.setToken(response.data.access_token);
        // Set token to the state
        commit("setLoginToken", response.data.access_token);
      });
    },
  },
});
