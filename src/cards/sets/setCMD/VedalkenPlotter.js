"use strict";
const Constants = require ("../../../Constants");
const VedalkenPlotterBase = require("../setGPT/VedalkenPlotter");

class VedalkenPlotter extends VedalkenPlotterBase {
  constructor (game) {
    super(game, "Vedalken Plotter", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VedalkenPlotter;
