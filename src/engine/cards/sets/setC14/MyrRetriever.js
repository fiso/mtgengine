"use strict";
const Constants = require ("../../../Constants");
const MyrRetrieverBase = require("../setCM2/MyrRetriever");

class MyrRetriever extends MyrRetrieverBase {
  constructor (game) {
    super(game, "Myr Retriever", "Commander 2014", "C14");
  }
}

module.exports = MyrRetriever;
