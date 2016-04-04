"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoldeviMachinist extends Card {
  constructor(game) {
    super(game, "Soldevi Machinist", "Ice Age", "ICE");
  }
}

module.exports = SoldeviMachinist;
