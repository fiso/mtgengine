"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmitetheMonstrous extends UnimplementedCard {
  constructor(game) {
    super(game, "Smite the Monstrous", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SmitetheMonstrous;
