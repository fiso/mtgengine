"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwinBolt extends UnimplementedCard {
  constructor (game) {
    super(game, "Twin Bolt", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = TwinBolt;
