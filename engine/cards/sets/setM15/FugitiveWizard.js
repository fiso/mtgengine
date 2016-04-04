"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FugitiveWizardBase = require("../set8ED/FugitiveWizard.js");

class FugitiveWizard extends FugitiveWizardBase {
  constructor(game) {
    super(game, "Fugitive Wizard", "Magic 2015 Core Set", "M15");
  }
}

module.exports = FugitiveWizard;
