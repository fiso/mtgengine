"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AeoPaquetteDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Aeo Paquette Decklist", "World Championship Decks 2004", "WC04");
  }
}

module.exports = AeoPaquetteDecklist;
