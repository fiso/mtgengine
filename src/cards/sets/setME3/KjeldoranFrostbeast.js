"use strict";
const Constants = require ("../../../Constants");
const KjeldoranFrostbeastBase = require("../setICE/KjeldoranFrostbeast");

class KjeldoranFrostbeast extends KjeldoranFrostbeastBase {
  constructor(game) {
    super(game, "Kjeldoran Frostbeast", "Masters Edition III", "ME3");
  }
}

module.exports = KjeldoranFrostbeast;
