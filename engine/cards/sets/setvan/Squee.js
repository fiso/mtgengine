"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Squee extends Card {
  constructor(game) {
    super(game, "Squee", "Vanguard", "VAN");
  }
}

module.exports = Squee;
