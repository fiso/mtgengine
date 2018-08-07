"use strict";
const Constants = require ("../../../Constants");
const KarnSilverGolemBase = require("../setVMA/KarnSilverGolem");

class KarnSilverGolem extends KarnSilverGolemBase {
  constructor (game) {
    super(game, "Karn, Silver Golem", "World Championship Decks 1999", "WC99");
  }
}

module.exports = KarnSilverGolem;
