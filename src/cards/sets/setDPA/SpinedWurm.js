"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpinedWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Spined Wurm", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = SpinedWurm;
