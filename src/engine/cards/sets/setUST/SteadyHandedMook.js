"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteadyHandedMook extends UnimplementedCard {
  constructor (game) {
    super(game, "Steady-Handed Mook", "Unstable", "UST");
  }
}

module.exports = SteadyHandedMook;
