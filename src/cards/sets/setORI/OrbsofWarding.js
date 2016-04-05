"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrbsofWarding extends UnimplementedCard {
  constructor(game) {
    super(game, "Orbs of Warding", "Magic Origins", "ORI");
  }
}

module.exports = OrbsofWarding;
