module.exports = [
  {
    name: 'strapi::errors',  // ✅ Required for error handling
  },
  {
    name: 'strapi::security',
  },
  {
    name: 'strapi::cors',
  },
  {
    name: 'strapi::poweredBy',
  },
  {
    name: 'strapi::logger',
  },
  {
    name: 'strapi::query',
  },
  {
    name: 'strapi::body',
  },
  {
    name: 'strapi::session',  // ✅ Remove this if not using sessions
  },
  {
    name: 'strapi::favicon',
  },
  {
    name: 'strapi::public',
  },
];
