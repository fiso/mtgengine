"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeedthePack extends UnimplementedCard {
  constructor(game) {
    super(game, "Feed the Pack", "Dark Ascension", "DKA");
  }
}

module.exports = FeedthePack;
