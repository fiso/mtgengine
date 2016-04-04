"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EssenceFeed extends Card {
  constructor(game) {
    super(game, "Essence Feed", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EssenceFeed;
