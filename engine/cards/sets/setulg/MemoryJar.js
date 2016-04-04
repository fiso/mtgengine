"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MemoryJarBase = require("../setV10/MemoryJar.js");

class MemoryJar extends MemoryJarBase {
  constructor(game) {
    super(game, "Memory Jar", "Urza's Legacy", "ULG");
  }
}

module.exports = MemoryJar;
