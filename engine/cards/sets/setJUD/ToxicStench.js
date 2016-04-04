"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ToxicStench extends Card {
  constructor(game) {
    super(game, "Toxic Stench", "Judgment", "JUD");
  }
}

module.exports = ToxicStench;
