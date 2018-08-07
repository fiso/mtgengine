"use strict";
const Constants = require ("../../../Constants");
const LoreWeaverBase = require("../setPBBD/LoreWeaver");

class LoreWeaver extends LoreWeaverBase {
  constructor (game) {
    super(game, "Lore Weaver", "Battlebond", "BBD");
  }
}

module.exports = LoreWeaver;
