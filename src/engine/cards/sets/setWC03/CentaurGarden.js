"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CentaurGarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Centaur Garden", "World Championship Decks 2003", "WC03");
  }
}

module.exports = CentaurGarden;
