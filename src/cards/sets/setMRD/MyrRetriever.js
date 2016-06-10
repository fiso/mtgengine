"use strict";
const Constants = require ("../../../Constants");
const MyrRetrieverBase = require("../setC14/MyrRetriever");

class MyrRetriever extends MyrRetrieverBase {
  constructor (game) {
    super(game, "Myr Retriever", "Mirrodin", "MRD");
  }
}

module.exports = MyrRetriever;
