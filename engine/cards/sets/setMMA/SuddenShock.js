"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuddenShock extends Card {
  constructor(game) {
    super(game, "Sudden Shock", "Modern Masters", "MMA");
  }
}

module.exports = SuddenShock;
