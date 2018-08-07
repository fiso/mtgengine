"use strict";
const Constants = require ("../../../Constants");
const ChakramRetrieverBase = require("../setPBBD/ChakramRetriever");

class ChakramRetriever extends ChakramRetrieverBase {
  constructor (game) {
    super(game, "Chakram Retriever", "Battlebond", "BBD");
  }
}

module.exports = ChakramRetriever;
