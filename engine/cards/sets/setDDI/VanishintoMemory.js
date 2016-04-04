"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VanishintoMemoryBase = require("../setCSP/VanishintoMemory.js");

class VanishintoMemory extends VanishintoMemoryBase {
  constructor(game) {
    super(game, "Vanish into Memory", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = VanishintoMemory;
