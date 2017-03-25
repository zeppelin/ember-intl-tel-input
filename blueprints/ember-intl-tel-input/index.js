module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('intl-tel-input', '9.2.0')
  }
};
