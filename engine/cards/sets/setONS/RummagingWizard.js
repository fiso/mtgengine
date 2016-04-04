"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RummagingWizard extends Card {
  constructor(game) {
    super(game, "Rummaging Wizard", "Onslaught", "ONS");
  }
}

module.exports = RummagingWizard;
