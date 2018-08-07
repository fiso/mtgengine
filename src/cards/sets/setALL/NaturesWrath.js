"use strict";
const Constants = require ("../../../Constants");
const NaturesWrathBase = require("../setME2/NaturesWrath");

class NaturesWrath extends NaturesWrathBase {
  constructor (game) {
    super(game, "Nature's Wrath", "Alliances", "ALL");
  }
}

module.exports = NaturesWrath;
