"use strict";
const Constants = require ("../../../Constants");
const LoxodonHierarchBase = require("../setDDH/LoxodonHierarch");

class LoxodonHierarch extends LoxodonHierarchBase {
  constructor(game) {
    super(game, "Loxodon Hierarch", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = LoxodonHierarch;
