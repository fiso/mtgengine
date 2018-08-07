"use strict";
const Constants = require ("../../../Constants");
const KjeldoranFrostbeastBase = require("../setME3/KjeldoranFrostbeast");

class KjeldoranFrostbeast extends KjeldoranFrostbeastBase {
  constructor (game) {
    super(game, "Kjeldoran Frostbeast", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranFrostbeast;
