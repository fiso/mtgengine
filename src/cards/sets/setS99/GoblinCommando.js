"use strict";
const Constants = require ("../../../Constants");
const GoblinCommandoBase = require("../setVMA/GoblinCommando");

class GoblinCommando extends GoblinCommandoBase {
  constructor (game) {
    super(game, "Goblin Commando", "Starter 1999", "S99");
  }
}

module.exports = GoblinCommando;
