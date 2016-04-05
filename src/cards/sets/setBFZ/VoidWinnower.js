"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoidWinnower extends UnimplementedCard {
  constructor(game) {
    super(game, "Void Winnower", "Battle for Zendikar", "BFZ");
  }
}

module.exports = VoidWinnower;
