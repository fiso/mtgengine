"use strict";
const Constants = require ("../../../Constants");
const MemoryJarBase = require("../setV10/MemoryJar");

class MemoryJar extends MemoryJarBase {
  constructor (game) {
    super(game, "Memory Jar", "Urza's Legacy", "ULG");
  }
}

module.exports = MemoryJar;
