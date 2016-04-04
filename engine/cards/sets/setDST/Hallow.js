"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hallow extends Card {
  constructor(game) {
    super(game, "Hallow", "Darksteel", "DST");
  }
}

module.exports = Hallow;
