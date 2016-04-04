"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiftoftheWoods extends Card {
  constructor(game) {
    super(game, "Gift of the Woods", "Alliances", "ALL");
  }
}

module.exports = GiftoftheWoods;
