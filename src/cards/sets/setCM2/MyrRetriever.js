"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrRetriever extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Retriever", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = MyrRetriever;
