// const path = require('path');

module.exports = () => {
  const config = {};

  /**
   * View options
   * @member Config#view
   */
  config.router = {
    /**
     * root directory for auto match route
     * include server route and webpack entry
     * @member {String} Config#root
     * @since 1.0.0
     */
    root: '/',

    urlPrefix: '/',
    /**
     * files or directories should be ingored
     * when automatically match route
     * @member {String} Config#exclude
     * @since 1.0.0
     */
    exclude: '^_',

    /**
     * define custom mapping files to router
     *
     * {
     *  user: {
     *    profile: 'get',
     *    create: 'post',
     *  }
     * }
     */
    mapping: null,

    entry: 'index',
  };

  return config;
};