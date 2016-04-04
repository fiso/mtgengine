"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PerplexingChimera extends Card {
  constructor(game) {
    super(game, "Perplexing Chimera", "Born of the Gods", "BNG");
  }
}

module.exports = PerplexingChimera;
