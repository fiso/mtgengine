"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NetherSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Nether Spirit", "World Championship Decks 2001", "WC01");
  }
}

module.exports = NetherSpirit;
