"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NantukoVigilante extends UnimplementedCard {
  constructor (game) {
    super(game, "Nantuko Vigilante", "World Championship Decks 2003", "WC03");
  }
}

module.exports = NantukoVigilante;
