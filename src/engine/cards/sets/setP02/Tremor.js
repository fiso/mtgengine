"use strict";
const Constants = require ("../../../Constants");
const TremorBase = require("../set8ED/Tremor");

class Tremor extends TremorBase {
  constructor (game) {
    super(game, "Tremor", "Portal Second Age", "P02");
  }
}

module.exports = Tremor;
