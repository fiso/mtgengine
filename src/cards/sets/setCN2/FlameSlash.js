"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameSlash extends UnimplementedCard {
  constructor (game) {
    super(game, "Flame Slash", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = FlameSlash;
