"use strict";
const Constants = require ("../../../Constants");
const HealingSalveBase = require("../setBRB/HealingSalve");

class HealingSalve extends HealingSalveBase {
  constructor (game) {
    super(game, "Healing Salve", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = HealingSalve;
