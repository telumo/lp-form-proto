export const state = () => ({
  companyName: ""
});

export const mutations = {
  setCompanyName(state, companyName) {
    state.companyName = companyName;
  }
};
