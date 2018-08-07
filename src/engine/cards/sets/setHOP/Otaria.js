"use strict";
const Constants = require ("../../../Constants");
const OtariaBase = require("../setPCA/Otaria");

class Otaria extends OtariaBase {
  constructor (game) {
    super(game, "Otaria", "Planechase", "HOP");
  }
}

module.exports = Otaria;
