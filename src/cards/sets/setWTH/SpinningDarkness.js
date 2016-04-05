"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpinningDarkness extends UnimplementedCard {
  constructor(game) {
    super(game, "Spinning Darkness", "Weatherlight", "WTH");
  }
}

module.exports = SpinningDarkness;
