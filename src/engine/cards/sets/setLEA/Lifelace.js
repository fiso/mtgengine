"use strict";
const Constants = require ("../../../Constants");
const LifelaceBase = require("../set4ED/Lifelace");

class Lifelace extends LifelaceBase {
  constructor (game) {
    super(game, "Lifelace", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Lifelace;
