export const state = () => ({
  companyName: "",
  name: "",
  phoneNumber: "",
  email: "",
  address: "",
  soudan: {
    item: "",
    use: "",
    comment: ""
  },
  selectedFormType: "",
  mitumoriItems: []
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
  },
  setSoudanItem(state, item) {
    state.soudan.item = item;
  },
  setSoudanUse(state, use) {
    state.soudan.use = use;
  },
  setSoudanComment(state, comment) {
    state.soudan.comment = comment;
  },
  setSelectedFormType(state, selectedFormType) {
    state.selectedFormType = selectedFormType;
  },
  setMitsumoriItems(state, items) {
    state.mitumoriItems = items;
  }
};
