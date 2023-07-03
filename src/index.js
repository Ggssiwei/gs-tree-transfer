import TreeTransfer from './components/Transfer.vue';


export default {
  install: (app, options) => {
    app.component('treeTransfer', TreeTransfer)
  }
};