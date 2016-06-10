"use strict";
const Constants = require ("../../../Constants");
const ManaFlareBase = require("../setCED/ManaFlare");

class ManaFlare extends ManaFlareBase {
  constructor (game) {
    super(game, "Mana Flare", "Limited Edition Beta", "LEB");
  }
}

module.exports = ManaFlare;
