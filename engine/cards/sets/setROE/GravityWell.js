"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GravityWell extends Card {
  constructor(game) {
    super(game, "Gravity Well", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GravityWell;
