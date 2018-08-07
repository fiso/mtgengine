"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ovinomancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Ovinomancer", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Ovinomancer;
