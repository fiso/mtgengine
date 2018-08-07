"use strict";
const Constants = require ("../../../Constants");
const MemoryJarBase = require("../setVMA/MemoryJar");

class MemoryJar extends MemoryJarBase {
  constructor (game) {
    super(game, "Memory Jar", "From the Vault: Relics", "V10");
  }
}

module.exports = MemoryJar;
