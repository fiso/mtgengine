"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChakramRetriever extends UnimplementedCard {
  constructor (game) {
    super(game, "Chakram Retriever", "Battlebond Promos", "PBBD");
  }
}

module.exports = ChakramRetriever;
