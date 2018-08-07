"use strict";
const Constants = require ("../../../Constants");
const EagerCadetBase = require("../set9ED/EagerCadet");

class EagerCadet extends EagerCadetBase {
  constructor (game) {
    super(game, "Eager Cadet", "Eighth Edition", "8ED");
  }
}

module.exports = EagerCadet;
