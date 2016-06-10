"use strict";
const Constants = require ("../../../Constants");
const KarnSilverGolemBase = require("../setpARL/KarnSilverGolem");

class KarnSilverGolem extends KarnSilverGolemBase {
  constructor (game) {
    super(game, "Karn, Silver Golem", "From the Vault: Relics", "V10");
  }
}

module.exports = KarnSilverGolem;
