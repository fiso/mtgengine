"use strict";
const Constants = require ("../../../Constants");
const ArmageddonBase = require("../setATH/Armageddon");

class Armageddon extends ArmageddonBase {
  constructor(game) {
    super(game, "Armageddon", "International Collector's Edition", "CEI");
  }
}

module.exports = Armageddon;
