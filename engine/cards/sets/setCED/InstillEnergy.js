"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InstillEnergy extends Card {
  constructor(game) {
    super(game, "Instill Energy", "Collector's Edition", "CED");
  }
}

module.exports = InstillEnergy;
