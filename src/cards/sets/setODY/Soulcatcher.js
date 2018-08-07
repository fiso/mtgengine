"use strict";
const Constants = require ("../../../Constants");
const SoulcatcherBase = require("../setEMA/Soulcatcher");

class Soulcatcher extends SoulcatcherBase {
  constructor (game) {
    super(game, "Soulcatcher", "Odyssey", "ODY");
  }
}

module.exports = Soulcatcher;
