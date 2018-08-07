"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HowlingMine extends UnimplementedCard {
  constructor (game) {
    super(game, "Howling Mine", "Commander 2016", "C16");
  }
}

module.exports = HowlingMine;
