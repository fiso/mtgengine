"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElementalBond extends Card {
  constructor(game) {
    super(game, "Elemental Bond", "Magic Origins", "ORI");
  }
}

module.exports = ElementalBond;
