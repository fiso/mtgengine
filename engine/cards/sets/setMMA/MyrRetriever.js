"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MyrRetrieverBase = require("../setC14/MyrRetriever.js");

class MyrRetriever extends MyrRetrieverBase {
  constructor(game) {
    super(game, "Myr Retriever", "Modern Masters", "MMA");
  }
}

module.exports = MyrRetriever;
