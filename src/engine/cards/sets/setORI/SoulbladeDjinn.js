"use strict";
const Constants = require ("../../../Constants");
const SoulbladeDjinnBase = require("../setPORI/SoulbladeDjinn");

class SoulbladeDjinn extends SoulbladeDjinnBase {
  constructor (game) {
    super(game, "Soulblade Djinn", "Magic Origins", "ORI");
  }
}

module.exports = SoulbladeDjinn;
