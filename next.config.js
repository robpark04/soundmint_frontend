const withTM = require("next-transpile-modules")(["letterizejs", "animejs"]);

module.exports = withTM({
  reactStrictMode: true,
  env: {
    API: process.env.API,
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_DOMAIN: process.env.MAILCHIMP_DOMAIN,
    MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID,
    PROVIDER: process.env.PROVIDER,
    MINTER_CONTRACT_ADDRESS: process.env.MINTER_CONTRACT_ADDRESS,
    BASETOKEN_CONTRACT_ADDRESS: process.env.BASETOKEN_CONTRACT_ADDRESS,
    NOUNS_AUCTION_HOUSE_CONTRACT_ADDRESS:
      process.env.NOUNS_AUCTION_HOUSE_CONTRACT_ADDRESS,
    S3_ENDPOINT: process.env.S3_ENDPOINT,
    NETWORK_ID: process.env.NETWORK_ID,
    BNC_API_KEY: process.env.BNC_API_KEY,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    FROM_EMAIL: process.env.FROM_EMAIL,
    TO_EMAIL: process.env.TO_EMAIL,
    THEGRAPH_ENDPOINT: process.env.THEGRAPH_ENDPOINT,
    ETHERSCAN_URL: process.env.ETHERSCAN_URL,
    VINYL_CONTRACT_ADDRESS: process.env.VINYL_CONTRACT_ADDRESS
  },
});
