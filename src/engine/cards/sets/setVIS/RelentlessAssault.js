"use strict";
const Constants = require ("../../../Constants");
const RelentlessAssaultBase = require("../setDDT/RelentlessAssault");

class RelentlessAssault extends RelentlessAssaultBase {
  constructor (game) {
    super(game, "Relentless Assault", "Visions", "VIS");
  }
}

module.exports = RelentlessAssault;
