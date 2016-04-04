"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RelentlessAssaultBase = require("../set6ED/RelentlessAssault.js");

class RelentlessAssault extends RelentlessAssaultBase {
  constructor(game) {
    super(game, "Relentless Assault", "Eighth Edition", "8ED");
  }
}

module.exports = RelentlessAssault;
