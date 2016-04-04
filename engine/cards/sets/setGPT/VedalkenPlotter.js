"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VedalkenPlotter extends Card {
  constructor(game) {
    super(game, "Vedalken Plotter", "Guildpact", "GPT");
  }
}

module.exports = VedalkenPlotter;
