"use strict";
const Constants = require ("../../../Constants");
const HealingSalveBase = require("../setBRB/HealingSalve");

class HealingSalve extends HealingSalveBase {
  constructor(game) {
    super(game, "Healing Salve", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = HealingSalve;
