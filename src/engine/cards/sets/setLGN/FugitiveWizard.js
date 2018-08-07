"use strict";
const Constants = require ("../../../Constants");
const FugitiveWizardBase = require("../setM15/FugitiveWizard");

class FugitiveWizard extends FugitiveWizardBase {
  constructor (game) {
    super(game, "Fugitive Wizard", "Legions", "LGN");
  }
}

module.exports = FugitiveWizard;
