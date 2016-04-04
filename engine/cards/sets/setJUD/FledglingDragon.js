"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FledglingDragon extends Card {
  constructor(game) {
    super(game, "Fledgling Dragon", "Judgment", "JUD");
  }
}

module.exports = FledglingDragon;
