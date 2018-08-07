"use strict";
const Constants = require ("../../../Constants");
const KarnSilverGolemBase = require("../setVMA/KarnSilverGolem");

class KarnSilverGolem extends KarnSilverGolemBase {
  constructor (game) {
    super(game, "Karn, Silver Golem", "Arena League 1999", "PAL99");
  }
}

module.exports = KarnSilverGolem;
