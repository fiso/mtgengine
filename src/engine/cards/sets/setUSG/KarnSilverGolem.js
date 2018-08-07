"use strict";
const Constants = require ("../../../Constants");
const KarnSilverGolemBase = require("../setVMA/KarnSilverGolem");

class KarnSilverGolem extends KarnSilverGolemBase {
  constructor (game) {
    super(game, "Karn, Silver Golem", "Urza's Saga", "USG");
  }
}

module.exports = KarnSilverGolem;
