"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AltarGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Altar Golem", "Eventide", "EVE");
  }
}

module.exports = AltarGolem;
