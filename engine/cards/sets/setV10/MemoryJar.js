"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MemoryJar extends Card {
  constructor(game) {
    super(game, "Memory Jar", "From the Vault: Relics", "V10");
  }
}

module.exports = MemoryJar;
