"use strict";
const Constants = require ("../../../Constants");
const RelentlessAssaultBase = require("../setDDT/RelentlessAssault");

class RelentlessAssault extends RelentlessAssaultBase {
  constructor (game) {
    super(game, "Relentless Assault", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RelentlessAssault;
