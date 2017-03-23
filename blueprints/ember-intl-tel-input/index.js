module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject({
      [{ name: 'intl-tel-input', target: '9.2.0' }],
      blueprintOptions: { saveDev: true }
    });
  }
};
