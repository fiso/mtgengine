"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Envelop extends UnimplementedCard {
  constructor (game) {
    super(game, "Envelop", "World Championship Decks 2003", "WC03");
  }
}

module.exports = Envelop;
