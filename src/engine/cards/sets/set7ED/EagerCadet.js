"use strict";
const Constants = require ("../../../Constants");
const EagerCadetBase = require("../set9ED/EagerCadet");

class EagerCadet extends EagerCadetBase {
  constructor (game) {
    super(game, "Eager Cadet", "Seventh Edition", "7ED");
  }
}

module.exports = EagerCadet;
