"use strict";
const Constants = require ("../../../Constants");
const TremorBase = require("../set6ED/Tremor");

class Tremor extends TremorBase {
  constructor(game) {
    super(game, "Tremor", "Seventh Edition", "7ED");
  }
}

module.exports = Tremor;
