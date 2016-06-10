"use strict";
const Constants = require ("../../../Constants");
const HealingSalveBase = require("../setBRB/HealingSalve");

class HealingSalve extends HealingSalveBase {
  constructor (game) {
    super(game, "Healing Salve", "International Collector's Edition", "CEI");
  }
}

module.exports = HealingSalve;
