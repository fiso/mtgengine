"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flameshot extends UnimplementedCard {
  constructor (game) {
    super(game, "Flameshot", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Flameshot;
