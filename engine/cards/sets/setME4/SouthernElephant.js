"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SouthernElephant extends Card {
  constructor(game) {
    super(game, "Southern Elephant", "Masters Edition IV", "ME4");
  }
}

module.exports = SouthernElephant;
