"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RummagingWizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Rummaging Wizard", "Onslaught", "ONS");
  }
}

module.exports = RummagingWizard;
