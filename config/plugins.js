module.exports = () => ({    "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: "<netlify-access-token>",
      sites: [
        {
          name: 'Site 1',
          id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          buildHook: "https://api.netlify.com/build_hooks/<hook_id>",
          branch: 'master' // optional
        }
      ]
    },
  }
});
