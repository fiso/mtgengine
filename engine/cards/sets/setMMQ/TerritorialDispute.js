"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TerritorialDispute extends Card {
  constructor(game) {
    super(game, "Territorial Dispute", "Mercadian Masques", "MMQ");
  }
}

module.exports = TerritorialDispute;
