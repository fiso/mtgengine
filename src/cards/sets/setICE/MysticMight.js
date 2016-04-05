"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticMight extends UnimplementedCard {
  constructor(game) {
    super(game, "Mystic Might", "Ice Age", "ICE");
  }
}

module.exports = MysticMight;
