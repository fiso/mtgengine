"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForerunnerofSlaughterBase = require("../setBFZ/ForerunnerofSlaughter.js");

class ForerunnerofSlaughter extends ForerunnerofSlaughterBase {
  constructor(game) {
    super(game, "Forerunner of Slaughter", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = ForerunnerofSlaughter;
