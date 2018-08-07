"use strict";
const Constants = require ("../../../Constants");
const DAvenantArcherBase = require("../setME3/DAvenantArcher");

class DAvenantArcher extends DAvenantArcherBase {
  constructor (game) {
    super(game, "D'Avenant Archer", "Chronicles", "CHR");
  }
}

module.exports = DAvenantArcher;
