"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HowlingMine extends UnimplementedCard {
  constructor (game) {
    super(game, "Howling Mine", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HowlingMine;
