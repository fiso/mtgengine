"use strict";
const Constants = require ("../../../Constants");
const AridMesaBase = require("../setMM3/AridMesa");

class AridMesa extends AridMesaBase {
  constructor (game) {
    super(game, "Arid Mesa", "Zendikar Expeditions", "EXP");
  }
}

module.exports = AridMesa;
