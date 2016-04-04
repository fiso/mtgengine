"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AltarGolem extends Card {
  constructor(game) {
    super(game, "Altar Golem", "Eventide", "EVE");
  }
}

module.exports = AltarGolem;
