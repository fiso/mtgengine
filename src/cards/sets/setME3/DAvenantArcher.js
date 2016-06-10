"use strict";
const Constants = require ("../../../Constants");
const DAvenantArcherBase = require("../setCHR/DAvenantArcher");

class DAvenantArcher extends DAvenantArcherBase {
  constructor (game) {
    super(game, "D'Avenant Archer", "Masters Edition III", "ME3");
  }
}

module.exports = DAvenantArcher;
