"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RelentlessAssaultBase = require("../set6ED/RelentlessAssault.js");

class RelentlessAssault extends RelentlessAssaultBase {
  constructor(game) {
    super(game, "Relentless Assault", "Starter 1999", "S99");
  }
}

module.exports = RelentlessAssault;
