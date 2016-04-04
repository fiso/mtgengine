"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LadiesKnight extends Card {
  constructor(game) {
    super(game, "Ladies' Knight", "Unhinged", "UNH");
  }
}

module.exports = LadiesKnight;
