"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpinedWurm extends Card {
  constructor(game) {
    super(game, "Spined Wurm", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = SpinedWurm;
