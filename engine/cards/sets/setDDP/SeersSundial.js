"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeersSundialBase = require("../setC13/SeersSundial.js");

class SeersSundial extends SeersSundialBase {
  constructor(game) {
    super(game, "Seer's Sundial", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = SeersSundial;
