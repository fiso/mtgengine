"use strict";
const Constants = require ("../../../Constants");
const TremorBase = require("../set8ED/Tremor");

class Tremor extends TremorBase {
  constructor (game) {
    super(game, "Tremor", "Mercadian Masques", "MMQ");
  }
}

module.exports = Tremor;
