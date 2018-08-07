"use strict";
const Constants = require ("../../../Constants");
const TremorBase = require("../set8ED/Tremor");

class Tremor extends TremorBase {
  constructor (game) {
    super(game, "Tremor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Tremor;
