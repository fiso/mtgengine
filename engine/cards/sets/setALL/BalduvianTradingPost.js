"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianTradingPost extends UnimplementedCard {
  constructor(game) {
    super(game, "Balduvian Trading Post", "Alliances", "ALL");
  }
}

module.exports = BalduvianTradingPost;
