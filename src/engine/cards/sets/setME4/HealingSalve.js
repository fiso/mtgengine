"use strict";
const Constants = require ("../../../Constants");
const HealingSalveBase = require("../setDVD/HealingSalve");

class HealingSalve extends HealingSalveBase {
  constructor (game) {
    super(game, "Healing Salve", "Masters Edition IV", "ME4");
  }
}

module.exports = HealingSalve;
