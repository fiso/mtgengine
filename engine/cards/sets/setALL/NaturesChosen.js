"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaturesChosen extends Card {
  constructor(game) {
    super(game, "Nature's Chosen", "Alliances", "ALL");
  }
}

module.exports = NaturesChosen;
