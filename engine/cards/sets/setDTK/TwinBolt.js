"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwinBolt extends UnimplementedCard {
  constructor(game) {
    super(game, "Twin Bolt", "Dragons of Tarkir", "DTK");
  }
}

module.exports = TwinBolt;
