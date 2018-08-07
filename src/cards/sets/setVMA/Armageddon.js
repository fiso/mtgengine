"use strict";
const Constants = require ("../../../Constants");
const ArmageddonBase = require("../setA25/Armageddon");

class Armageddon extends ArmageddonBase {
  constructor (game) {
    super(game, "Armageddon", "Vintage Masters", "VMA");
  }
}

module.exports = Armageddon;
