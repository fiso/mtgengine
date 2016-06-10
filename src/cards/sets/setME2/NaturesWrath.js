"use strict";
const Constants = require ("../../../Constants");
const NaturesWrathBase = require("../setALL/NaturesWrath");

class NaturesWrath extends NaturesWrathBase {
  constructor (game) {
    super(game, "Nature's Wrath", "Masters Edition II", "ME2");
  }
}

module.exports = NaturesWrath;
