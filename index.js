/* jshint node: true */
'use strict';

const path = require('path');
const map = require('broccoli-stew').map;
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-intl-tel-input',

  included: function(app) {
    this._super.included(app);

    var config = app.options.intlTelInput;

    if (config && true === config.includeUtilsScript) {
      app.import('vendor/intl-tel-input/utils.js');
    }

    app.import('vendor/intl-tel-input/intlTelInput.js');

    app.import(app.bowerDirectory + '/intl-tel-input/build/img/flags.png', { destDir: 'assets/images' });
    app.import(app.bowerDirectory + '/intl-tel-input/build/img/flags@2x.png', { destDir: 'assets/images' });
  },

  treeForVendor(defaultTree) {
    let bowerDirectory = path.resolve('bower_components');
    let browserVendorLib = new Funnel(bowerDirectory + '/intl-tel-input/build/js', {
      include: ['*.js'],
      destDir: 'intl-tel-input'
    });

    // Wrap each imported library inside a guard against Fastboot
    // http://ember-fastboot.com/docs/addon-author-guide#third-party-dependencies
    browserVendorLib = map(browserVendorLib, (content) => {
      return `if (typeof FastBoot === 'undefined') { ${content} }`
    });

    return new mergeTrees([defaultTree, browserVendorLib]);
  }
};
