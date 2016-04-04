"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaturesWrath extends Card {
  constructor(game) {
    super(game, "Nature's Wrath", "Alliances", "ALL");
  }
}

module.exports = NaturesWrath;
