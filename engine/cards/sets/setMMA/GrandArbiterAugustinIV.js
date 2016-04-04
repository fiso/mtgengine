"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrandArbiterAugustinIVBase = require("../setDIS/GrandArbiterAugustinIV.js");

class GrandArbiterAugustinIV extends GrandArbiterAugustinIVBase {
  constructor(game) {
    super(game, "Grand Arbiter Augustin IV", "Modern Masters", "MMA");
  }
}

module.exports = GrandArbiterAugustinIV;
