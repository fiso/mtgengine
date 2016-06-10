"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrRetriever extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Retriever", "Commander 2014", "C14");
  }
}

module.exports = MyrRetriever;
