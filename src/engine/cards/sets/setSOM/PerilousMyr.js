"use strict";
const Constants = require ("../../../Constants");
const PerilousMyrBase = require("../setA25/PerilousMyr");

class PerilousMyr extends PerilousMyrBase {
  constructor (game) {
    super(game, "Perilous Myr", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PerilousMyr;
