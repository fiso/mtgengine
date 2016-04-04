"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CitanulFluteBase = require("../set10E/CitanulFlute.js");

class CitanulFlute extends CitanulFluteBase {
  constructor(game) {
    super(game, "Citanul Flute", "Urza's Saga", "USG");
  }
}

module.exports = CitanulFlute;
