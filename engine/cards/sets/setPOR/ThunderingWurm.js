"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThunderingWurm extends Card {
  constructor(game) {
    super(game, "Thundering Wurm", "Portal", "POR");
  }
}

module.exports = ThunderingWurm;
