"use strict";
const Constants = require ("../../../Constants");
const PestilenceBase = require("../setBRB/Pestilence");

class Pestilence extends PestilenceBase {
  constructor (game) {
    super(game, "Pestilence", "Unlimited Edition", "2ED");
  }
}

module.exports = Pestilence;
