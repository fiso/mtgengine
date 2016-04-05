"use strict";
const Constants = require ("../../../Constants");
const PestilenceBase = require("../setBRB/Pestilence");

class Pestilence extends PestilenceBase {
  constructor(game) {
    super(game, "Pestilence", "Fourth Edition", "4ED");
  }
}

module.exports = Pestilence;
