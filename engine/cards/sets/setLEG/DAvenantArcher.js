"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DAvenantArcherBase = require("../setCHR/DAvenantArcher.js");

class DAvenantArcher extends DAvenantArcherBase {
  constructor(game) {
    super(game, "D'Avenant Archer", "Legends", "LEG");
  }
}

module.exports = DAvenantArcher;
