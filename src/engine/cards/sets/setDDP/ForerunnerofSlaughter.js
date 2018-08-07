"use strict";
const Constants = require ("../../../Constants");
const ForerunnerofSlaughterBase = require("../setBFZ/ForerunnerofSlaughter");

class ForerunnerofSlaughter extends ForerunnerofSlaughterBase {
  constructor (game) {
    super(game, "Forerunner of Slaughter", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = ForerunnerofSlaughter;
