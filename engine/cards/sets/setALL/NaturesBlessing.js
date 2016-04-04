"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaturesBlessing extends Card {
  constructor(game) {
    super(game, "Nature's Blessing", "Alliances", "ALL");
  }
}

module.exports = NaturesBlessing;
