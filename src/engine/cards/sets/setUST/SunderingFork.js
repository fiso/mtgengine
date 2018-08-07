"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunderingFork extends UnimplementedCard {
  constructor (game) {
    super(game, "Sundering Fork", "Unstable", "UST");
  }
}

module.exports = SunderingFork;
