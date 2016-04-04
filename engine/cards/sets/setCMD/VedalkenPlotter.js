"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VedalkenPlotterBase = require("../setGPT/VedalkenPlotter.js");

class VedalkenPlotter extends VedalkenPlotterBase {
  constructor(game) {
    super(game, "Vedalken Plotter", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VedalkenPlotter;
