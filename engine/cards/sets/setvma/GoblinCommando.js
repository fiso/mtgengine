"use strict";
const Constants = require ("../../../Constants");
const GoblinCommandoBase = require("../setS99/GoblinCommando");

class GoblinCommando extends GoblinCommandoBase {
  constructor(game) {
    super(game, "Goblin Commando", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinCommando;
