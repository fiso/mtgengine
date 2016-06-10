"use strict";
const Constants = require ("../../../Constants");
const HealingSalveBase = require("../setBRB/HealingSalve");

class HealingSalve extends HealingSalveBase {
  constructor (game) {
    super(game, "Healing Salve", "Collector's Edition", "CED");
  }
}

module.exports = HealingSalve;
