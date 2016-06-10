"use strict";
const Constants = require ("../../../Constants");
const FugitiveWizardBase = require("../set8ED/FugitiveWizard");

class FugitiveWizard extends FugitiveWizardBase {
  constructor (game) {
    super(game, "Fugitive Wizard", "Tenth Edition", "10E");
  }
}

module.exports = FugitiveWizard;
