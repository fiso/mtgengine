"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SquiresDevotion extends UnimplementedCard {
  constructor (game) {
    super(game, "Squire's Devotion", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SquiresDevotion;
