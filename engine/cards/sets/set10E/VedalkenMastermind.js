"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VedalkenMastermindBase = require("../set5DN/VedalkenMastermind.js");

class VedalkenMastermind extends VedalkenMastermindBase {
  constructor(game) {
    super(game, "Vedalken Mastermind", "Tenth Edition", "10E");
  }
}

module.exports = VedalkenMastermind;
