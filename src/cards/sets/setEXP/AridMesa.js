"use strict";
const Constants = require ("../../../Constants");
const AridMesaBase = require("../setZEN/AridMesa");

class AridMesa extends AridMesaBase {
  constructor(game) {
    super(game, "Arid Mesa", "Zendikar Expedition", "EXP");
  }
}

module.exports = AridMesa;
