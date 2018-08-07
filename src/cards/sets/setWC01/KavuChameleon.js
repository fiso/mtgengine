"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuChameleon extends UnimplementedCard {
  constructor (game) {
    super(game, "Kavu Chameleon", "World Championship Decks 2001", "WC01");
  }
}

module.exports = KavuChameleon;
