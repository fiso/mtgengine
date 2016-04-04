"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShredMemory extends Card {
  constructor(game) {
    super(game, "Shred Memory", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ShredMemory;
