"use strict";
const Constants = require ("../../../Constants");
const RelentlessAssaultBase = require("../setDDT/RelentlessAssault");

class RelentlessAssault extends RelentlessAssaultBase {
  constructor (game) {
    super(game, "Relentless Assault", "Tenth Edition", "10E");
  }
}

module.exports = RelentlessAssault;
