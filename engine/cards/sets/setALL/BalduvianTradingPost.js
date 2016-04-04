"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalduvianTradingPost extends Card {
  constructor(game) {
    super(game, "Balduvian Trading Post", "Alliances", "ALL");
  }
}

module.exports = BalduvianTradingPost;
