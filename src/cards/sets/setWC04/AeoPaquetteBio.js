"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AeoPaquetteBio extends UnimplementedCard {
  constructor (game) {
    super(game, "Aeo Paquette Bio", "World Championship Decks 2004", "WC04");
  }
}

module.exports = AeoPaquetteBio;
