"use strict";
const Constants = require ("../../../Constants");
const BlackLotusBase = require("../setCED/BlackLotus");

class BlackLotus extends BlackLotusBase {
  constructor(game) {
    super(game, "Black Lotus", "International Collector's Edition", "CEI");
  }
}

module.exports = BlackLotus;
