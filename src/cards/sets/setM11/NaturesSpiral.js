"use strict";
const Constants = require ("../../../Constants");
const NaturesSpiralBase = require("../setDOM/NaturesSpiral");

class NaturesSpiral extends NaturesSpiralBase {
  constructor (game) {
    super(game, "Nature's Spiral", "Magic 2011", "M11");
  }
}

module.exports = NaturesSpiral;
