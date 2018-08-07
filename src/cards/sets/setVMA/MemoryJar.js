"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MemoryJar extends UnimplementedCard {
  constructor (game) {
    super(game, "Memory Jar", "Vintage Masters", "VMA");
  }
}

module.exports = MemoryJar;
