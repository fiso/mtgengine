"use strict";
const Constants = require ("../../../Constants");
const ArensonsAuraBase = require("../set5ED/ArensonsAura");

class ArensonsAura extends ArensonsAuraBase {
  constructor (game) {
    super(game, "Arenson's Aura", "Ice Age", "ICE");
  }
}

module.exports = ArensonsAura;
