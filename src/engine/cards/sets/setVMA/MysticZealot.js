"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticZealot extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Zealot", "Vintage Masters", "VMA");
  }
}

module.exports = MysticZealot;
