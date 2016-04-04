"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KjeldoranFrostbeastBase = require("../setICE/KjeldoranFrostbeast.js");

class KjeldoranFrostbeast extends KjeldoranFrostbeastBase {
  constructor(game) {
    super(game, "Kjeldoran Frostbeast", "Masters Edition III", "ME3");
  }
}

module.exports = KjeldoranFrostbeast;
