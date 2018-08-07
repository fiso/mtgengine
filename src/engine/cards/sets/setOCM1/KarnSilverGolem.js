"use strict";
const Constants = require ("../../../Constants");
const KarnSilverGolemBase = require("../setVMA/KarnSilverGolem");

class KarnSilverGolem extends KarnSilverGolemBase {
  constructor (game) {
    super(game, "Karn, Silver Golem", "Commander's Arsenal Oversized", "OCM1");
  }
}

module.exports = KarnSilverGolem;
