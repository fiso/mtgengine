"use strict";
const Constants = require ("../../../Constants");
const RelentlessAssaultBase = require("../set6ED/RelentlessAssault");

class RelentlessAssault extends RelentlessAssaultBase {
  constructor (game) {
    super(game, "Relentless Assault", "Seventh Edition", "7ED");
  }
}

module.exports = RelentlessAssault;
