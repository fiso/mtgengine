"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DAvenantArcher extends Card {
  constructor(game) {
    super(game, "D'Avenant Archer", "Chronicles", "CHR");
  }
}

module.exports = DAvenantArcher;
