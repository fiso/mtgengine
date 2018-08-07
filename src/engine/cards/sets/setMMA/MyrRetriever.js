"use strict";
const Constants = require ("../../../Constants");
const MyrRetrieverBase = require("../setCM2/MyrRetriever");

class MyrRetriever extends MyrRetrieverBase {
  constructor (game) {
    super(game, "Myr Retriever", "Modern Masters", "MMA");
  }
}

module.exports = MyrRetriever;
