"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NaturesSpiralBase = require("../setDPA/NaturesSpiral.js");

class NaturesSpiral extends NaturesSpiralBase {
  constructor(game) {
    super(game, "Nature's Spiral", "Magic 2010", "M10");
  }
}

module.exports = NaturesSpiral;
