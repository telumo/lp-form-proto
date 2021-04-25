export const state = () => ({
  companyName: "",
  name: "",
  phoneNumber: "",
  email: "",
  address: "",
  soudan: {
    item: "",
    use: "",
    comment: "",
    orderDate: "",
    deliverlyDate: ""
  },
  mitsumori: {
    item: "",
    use: "",
    concrete: "",
    orderDate: "",
    deliverlyDate: ""
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
  setSoudanOrderDate(state, orderDate) {
    state.soudan.orderDate = orderDate;
  },
  setSoudanDeliverlyDate(state, deliverlyDate) {
    state.soudan.deliverlyDate = deliverlyDate;
  },
  setSelectedFormType(state, selectedFormType) {
    state.selectedFormType = selectedFormType;
  },
  setMitsumoriItems(state, items) {
    state.mitumoriItems = items;
  },
  setMitsumoriItem(state, item) {
    state.mitsumori.item = item;
  },
  setMitsumoriUse(state, use) {
    state.mitsumori.use = use;
  },
  setMitsumoriConcrete(state, concrete) {
    state.mitsumori.concrete = concrete;
  },
  setMitsumoriOrderDate(state, orderDate) {
    state.mitsumori.orderDate = orderDate;
  },
  setMitsumoriDeliverlyDate(state, deliverlyDate) {
    state.mitsumori.deliverlyDate = deliverlyDate;
  }
};
