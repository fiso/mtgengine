"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HazeFrog extends UnimplementedCard {
  constructor(game) {
    super(game, "Haze Frog", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HazeFrog;
