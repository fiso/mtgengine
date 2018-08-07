"use strict";
const Constants = require ("../../../Constants");
const GrandArbiterAugustinIVBase = require("../setMMA/GrandArbiterAugustinIV");

class GrandArbiterAugustinIV extends GrandArbiterAugustinIVBase {
  constructor (game) {
    super(game, "Grand Arbiter Augustin IV", "Dissension", "DIS");
  }
}

module.exports = GrandArbiterAugustinIV;
