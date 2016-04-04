"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LodestoneBauble extends Card {
  constructor(game) {
    super(game, "Lodestone Bauble", "Alliances", "ALL");
  }
}

module.exports = LodestoneBauble;
