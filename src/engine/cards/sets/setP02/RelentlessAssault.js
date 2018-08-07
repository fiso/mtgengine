"use strict";
const Constants = require ("../../../Constants");
const RelentlessAssaultBase = require("../setDDT/RelentlessAssault");

class RelentlessAssault extends RelentlessAssaultBase {
  constructor (game) {
    super(game, "Relentless Assault", "Portal Second Age", "P02");
  }
}

module.exports = RelentlessAssault;
