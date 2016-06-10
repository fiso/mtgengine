"use strict";
const Constants = require ("../../../Constants");
const FugitiveWizardBase = require("../set8ED/FugitiveWizard");

class FugitiveWizard extends FugitiveWizardBase {
  constructor (game) {
    super(game, "Fugitive Wizard", "Ninth Edition", "9ED");
  }
}

module.exports = FugitiveWizard;
