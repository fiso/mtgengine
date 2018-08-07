"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LunarMystic extends UnimplementedCard {
  constructor (game) {
    super(game, "Lunar Mystic", "Avacyn Restored", "AVR");
  }
}

module.exports = LunarMystic;
