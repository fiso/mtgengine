"use strict";
const Constants = require ("../../../Constants");
const PestilenceBase = require("../setBRB/Pestilence");

class Pestilence extends PestilenceBase {
  constructor(game) {
    super(game, "Pestilence", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Pestilence;
