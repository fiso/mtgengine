"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrosanReclamation extends UnimplementedCard {
  constructor (game) {
    super(game, "Krosan Reclamation", "World Championship Decks 2003", "WC03");
  }
}

module.exports = KrosanReclamation;
