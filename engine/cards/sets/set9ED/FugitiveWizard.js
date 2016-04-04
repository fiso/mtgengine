"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FugitiveWizardBase = require("../set8ED/FugitiveWizard.js");

class FugitiveWizard extends FugitiveWizardBase {
  constructor(game) {
    super(game, "Fugitive Wizard", "Ninth Edition", "9ED");
  }
}

module.exports = FugitiveWizard;
