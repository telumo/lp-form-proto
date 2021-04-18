export const state = () => ({
  companyName: "",
  name: "",
  phoneNumber: "",
  email: "",
  address: ""
});

export const mutations = {
  setCompanyName(state, companyName) {
    state.companyName = companyName;
  },
  setName(state, name) {
    state.name = name;
  },
  setPhoneNumber(state, phoneNumber) {
    state.phoneNumber = phoneNumber;
  },
  setEmail(state, email) {
    state.email = email;
  },
  setAddress(state, address) {
    state.address = address;
  }
};
