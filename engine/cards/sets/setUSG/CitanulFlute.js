"use strict";
const Constants = require ("../../../Constants");
const CitanulFluteBase = require("../set10E/CitanulFlute");

class CitanulFlute extends CitanulFluteBase {
  constructor(game) {
    super(game, "Citanul Flute", "Urza's Saga", "USG");
  }
}

module.exports = CitanulFlute;
