"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeoninSquire extends Card {
  constructor(game) {
    super(game, "Leonin Squire", "Fifth Dawn", "5DN");
  }
}

module.exports = LeoninSquire;
