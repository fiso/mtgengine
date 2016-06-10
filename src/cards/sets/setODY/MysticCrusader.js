"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticCrusader extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Crusader", "Odyssey", "ODY");
  }
}

module.exports = MysticCrusader;
