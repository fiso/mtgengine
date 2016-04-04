"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FugitiveWizard extends Card {
  constructor(game) {
    super(game, "Fugitive Wizard", "Eighth Edition", "8ED");
  }
}

module.exports = FugitiveWizard;
