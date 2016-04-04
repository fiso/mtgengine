"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FungalBehemoth extends Card {
  constructor(game) {
    super(game, "Fungal Behemoth", "Planar Chaos", "PLC");
  }
}

module.exports = FungalBehemoth;
