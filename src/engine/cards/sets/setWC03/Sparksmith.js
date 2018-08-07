"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sparksmith extends UnimplementedCard {
  constructor (game) {
    super(game, "Sparksmith", "World Championship Decks 2003", "WC03");
  }
}

module.exports = Sparksmith;
