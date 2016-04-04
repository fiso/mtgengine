"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrinceofThralls extends Card {
  constructor(game) {
    super(game, "Prince of Thralls", "Shards of Alara", "ALA");
  }
}

module.exports = PrinceofThralls;
