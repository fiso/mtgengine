"use strict";
const Constants = require ("../../../Constants");
const RelentlessAssaultBase = require("../set6ED/RelentlessAssault");

class RelentlessAssault extends RelentlessAssaultBase {
  constructor (game) {
    super(game, "Relentless Assault", "Ninth Edition", "9ED");
  }
}

module.exports = RelentlessAssault;
