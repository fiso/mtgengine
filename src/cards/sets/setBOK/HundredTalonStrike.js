"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HundredTalonStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Hundred-Talon Strike", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HundredTalonStrike;
