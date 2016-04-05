"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EssenceFeed extends UnimplementedCard {
  constructor(game) {
    super(game, "Essence Feed", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EssenceFeed;
