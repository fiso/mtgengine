"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderousWrath extends UnimplementedCard {
  constructor (game) {
    super(game, "Thunderous Wrath", "Avacyn Restored", "AVR");
  }
}

module.exports = ThunderousWrath;
