"use strict";
const Constants = require ("../../../Constants");
const NaturesSpiralBase = require("../setDOM/NaturesSpiral");

class NaturesSpiral extends NaturesSpiralBase {
  constructor (game) {
    super(game, "Nature's Spiral", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = NaturesSpiral;
