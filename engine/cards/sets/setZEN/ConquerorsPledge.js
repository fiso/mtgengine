"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConquerorsPledge extends UnimplementedCard {
  constructor(game) {
    super(game, "Conqueror's Pledge", "Zendikar", "ZEN");
  }
}

module.exports = ConquerorsPledge;
