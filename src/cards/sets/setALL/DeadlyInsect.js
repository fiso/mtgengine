"use strict";
const Constants = require ("../../../Constants");
const DeadlyInsectBase = require("../setCST/DeadlyInsect");

class DeadlyInsect extends DeadlyInsectBase {
  constructor (game) {
    super(game, "Deadly Insect", "Alliances", "ALL");
  }
}

module.exports = DeadlyInsect;
