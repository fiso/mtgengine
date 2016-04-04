"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TopsyTurvy extends Card {
  constructor(game) {
    super(game, "Topsy Turvy", "Unhinged", "UNH");
  }
}

module.exports = TopsyTurvy;
