"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GravityWell extends UnimplementedCard {
  constructor(game) {
    super(game, "Gravity Well", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GravityWell;
