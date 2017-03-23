module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('intl-tel-input', '11.0.8');
  }
};
