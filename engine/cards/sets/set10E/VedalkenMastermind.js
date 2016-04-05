"use strict";
const Constants = require ("../../../Constants");
const VedalkenMastermindBase = require("../set5DN/VedalkenMastermind");

class VedalkenMastermind extends VedalkenMastermindBase {
  constructor(game) {
    super(game, "Vedalken Mastermind", "Tenth Edition", "10E");
  }
}

module.exports = VedalkenMastermind;
