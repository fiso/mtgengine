"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LoxodonHierarchBase = require("../setDDH/LoxodonHierarch.js");

class LoxodonHierarch extends LoxodonHierarchBase {
  constructor(game) {
    super(game, "Loxodon Hierarch", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = LoxodonHierarch;
