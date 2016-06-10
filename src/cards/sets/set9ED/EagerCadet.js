"use strict";
const Constants = require ("../../../Constants");
const EagerCadetBase = require("../set8ED/EagerCadet");

class EagerCadet extends EagerCadetBase {
  constructor (game) {
    super(game, "Eager Cadet", "Ninth Edition", "9ED");
  }
}

module.exports = EagerCadet;
