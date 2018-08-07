"use strict";
const Constants = require ("../../../Constants");
const MemoryJarBase = require("../setVMA/MemoryJar");

class MemoryJar extends MemoryJarBase {
  constructor (game) {
    super(game, "Memory Jar", "Urza's Legacy", "ULG");
  }
}

module.exports = MemoryJar;
