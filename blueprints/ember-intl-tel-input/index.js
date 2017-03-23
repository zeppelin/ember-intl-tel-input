module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject([
      { name: 'intl-tel-input', target: '11.0.8' }
    ]);
  }
};
