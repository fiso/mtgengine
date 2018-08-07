"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tithe extends UnimplementedCard {
  constructor (game) {
    super(game, "Tithe", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Tithe;
