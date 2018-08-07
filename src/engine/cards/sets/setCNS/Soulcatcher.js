"use strict";
const Constants = require ("../../../Constants");
const SoulcatcherBase = require("../setEMA/Soulcatcher");

class Soulcatcher extends SoulcatcherBase {
  constructor (game) {
    super(game, "Soulcatcher", "Conspiracy", "CNS");
  }
}

module.exports = Soulcatcher;
