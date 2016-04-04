"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SetessanTactics extends Card {
  constructor(game) {
    super(game, "Setessan Tactics", "Journey into Nyx", "JOU");
  }
}

module.exports = SetessanTactics;
