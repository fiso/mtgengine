"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RollingThunder extends UnimplementedCard {
  constructor(game) {
    super(game, "Rolling Thunder", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RollingThunder;
