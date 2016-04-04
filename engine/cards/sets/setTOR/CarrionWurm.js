"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarrionWurm extends Card {
  constructor(game) {
    super(game, "Carrion Wurm", "Torment", "TOR");
  }
}

module.exports = CarrionWurm;
