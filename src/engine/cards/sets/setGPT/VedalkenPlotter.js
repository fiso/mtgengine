"use strict";
const Constants = require ("../../../Constants");
const VedalkenPlotterBase = require("../setCMD/VedalkenPlotter");

class VedalkenPlotter extends VedalkenPlotterBase {
  constructor (game) {
    super(game, "Vedalken Plotter", "Guildpact", "GPT");
  }
}

module.exports = VedalkenPlotter;
