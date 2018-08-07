"use strict";
const Constants = require ("../../../Constants");
const FugitiveWizardBase = require("../setM15/FugitiveWizard");

class FugitiveWizard extends FugitiveWizardBase {
  constructor (game) {
    super(game, "Fugitive Wizard", "Eighth Edition", "8ED");
  }
}

module.exports = FugitiveWizard;
