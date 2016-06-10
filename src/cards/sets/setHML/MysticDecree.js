"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticDecree extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Decree", "Homelands", "HML");
  }
}

module.exports = MysticDecree;
