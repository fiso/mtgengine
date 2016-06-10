"use strict";
const Constants = require ("../../../Constants");
const LifelaceBase = require("../setCED/Lifelace");

class Lifelace extends LifelaceBase {
  constructor (game) {
    super(game, "Lifelace", "Limited Edition Beta", "LEB");
  }
}

module.exports = Lifelace;
