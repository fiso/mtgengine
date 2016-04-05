"use strict";
const Constants = require ("../../../Constants");
const FugitiveWizardBase = require("../set8ED/FugitiveWizard");

class FugitiveWizard extends FugitiveWizardBase {
  constructor(game) {
    super(game, "Fugitive Wizard", "Magic 2015 Core Set", "M15");
  }
}

module.exports = FugitiveWizard;
