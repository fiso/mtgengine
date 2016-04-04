"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AridMesaBase = require("../setZEN/AridMesa.js");

class AridMesa extends AridMesaBase {
  constructor(game) {
    super(game, "Arid Mesa", "Zendikar Expedition", "EXP");
  }
}

module.exports = AridMesa;
