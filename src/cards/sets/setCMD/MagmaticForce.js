"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagmaticForce extends UnimplementedCard {
  constructor(game) {
    super(game, "Magmatic Force", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = MagmaticForce;
