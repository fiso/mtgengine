"use strict";
const Constants = require ("../../../Constants");
const NaturesResurgenceBase = require("../set7ED/NaturesResurgence");

class NaturesResurgence extends NaturesResurgenceBase {
  constructor (game) {
    super(game, "Nature's Resurgence", "Classic Sixth Edition", "6ED");
  }
}

module.exports = NaturesResurgence;
