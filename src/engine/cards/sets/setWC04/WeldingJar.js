"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeldingJar extends UnimplementedCard {
  constructor (game) {
    super(game, "Welding Jar", "World Championship Decks 2004", "WC04");
  }
}

module.exports = WeldingJar;
