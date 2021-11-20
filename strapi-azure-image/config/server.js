module.exports = ({ env }) => ({
  host: env("SERVER_HOST", "0.0.0.0"),
  port: env.int("SERVER_PORT", 1337),
});
