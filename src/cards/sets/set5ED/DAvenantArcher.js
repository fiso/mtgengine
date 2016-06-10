"use strict";
const Constants = require ("../../../Constants");
const DAvenantArcherBase = require("../setCHR/DAvenantArcher");

class DAvenantArcher extends DAvenantArcherBase {
  constructor (game) {
    super(game, "D'Avenant Archer", "Fifth Edition", "5ED");
  }
}

module.exports = DAvenantArcher;
