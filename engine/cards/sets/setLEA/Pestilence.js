"use strict";
const Constants = require ("../../../Constants");
const PestilenceBase = require("../setBRB/Pestilence");

class Pestilence extends PestilenceBase {
  constructor(game) {
    super(game, "Pestilence", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Pestilence;
