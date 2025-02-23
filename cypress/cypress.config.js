const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const baseUrl =
        process.env.CYPRESS_ENV === "production"
          ? "https://jorlindstrom.github.io/HACKER-ESCAPEROOM"
          : "http://localhost:5501";

      config.baseUrl = baseUrl;
      return config;
    },
  },
});