"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VedalkenPlotter extends UnimplementedCard {
  constructor (game) {
    super(game, "Vedalken Plotter", "Commander 2011", "CMD");
  }
}

module.exports = VedalkenPlotter;
