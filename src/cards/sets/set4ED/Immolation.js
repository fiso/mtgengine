"use strict";
const Constants = require ("../../../Constants");
const ImmolationBase = require("../setME3/Immolation");

class Immolation extends ImmolationBase {
  constructor (game) {
    super(game, "Immolation", "Fourth Edition", "4ED");
  }
}

module.exports = Immolation;
