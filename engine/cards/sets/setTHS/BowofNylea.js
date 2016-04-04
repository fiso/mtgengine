"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BowofNylea extends Card {
  constructor(game) {
    super(game, "Bow of Nylea", "Theros", "THS");
  }
}

module.exports = BowofNylea;
