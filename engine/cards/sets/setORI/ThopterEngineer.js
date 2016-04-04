"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThopterEngineer extends Card {
  constructor(game) {
    super(game, "Thopter Engineer", "Magic Origins", "ORI");
  }
}

module.exports = ThopterEngineer;
