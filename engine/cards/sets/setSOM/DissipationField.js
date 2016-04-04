"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DissipationField extends Card {
  constructor(game) {
    super(game, "Dissipation Field", "Scars of Mirrodin", "SOM");
  }
}

module.exports = DissipationField;
