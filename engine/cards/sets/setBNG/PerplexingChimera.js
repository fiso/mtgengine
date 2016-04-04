"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PerplexingChimera extends UnimplementedCard {
  constructor(game) {
    super(game, "Perplexing Chimera", "Born of the Gods", "BNG");
  }
}

module.exports = PerplexingChimera;
