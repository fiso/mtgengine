"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeedthePack extends Card {
  constructor(game) {
    super(game, "Feed the Pack", "Dark Ascension", "DKA");
  }
}

module.exports = FeedthePack;
