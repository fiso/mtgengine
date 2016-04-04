"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VedalkenMastermind extends Card {
  constructor(game) {
    super(game, "Vedalken Mastermind", "Fifth Dawn", "5DN");
  }
}

module.exports = VedalkenMastermind;
