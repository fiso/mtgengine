"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KarnSilverGolemBase = require("../setpARL/KarnSilverGolem.js");

class KarnSilverGolem extends KarnSilverGolemBase {
  constructor(game) {
    super(game, "Karn, Silver Golem", "From the Vault: Relics", "V10");
  }
}

module.exports = KarnSilverGolem;
