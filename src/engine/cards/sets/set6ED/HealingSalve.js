"use strict";
const Constants = require ("../../../Constants");
const HealingSalveBase = require("../setDVD/HealingSalve");

class HealingSalve extends HealingSalveBase {
  constructor (game) {
    super(game, "Healing Salve", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HealingSalve;
