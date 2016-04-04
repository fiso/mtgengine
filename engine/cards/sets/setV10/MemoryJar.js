"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MemoryJar extends UnimplementedCard {
  constructor(game) {
    super(game, "Memory Jar", "From the Vault: Relics", "V10");
  }
}

module.exports = MemoryJar;
