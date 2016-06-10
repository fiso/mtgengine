"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RareBGone extends UnimplementedCard {
  constructor (game) {
    super(game, "Rare-B-Gone", "Unhinged", "UNH");
  }
}

module.exports = RareBGone;
