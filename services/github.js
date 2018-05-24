export default {
  contributors: () => fetch('https://api.github.com/repos/vuejs/vue/contributors'),
};
