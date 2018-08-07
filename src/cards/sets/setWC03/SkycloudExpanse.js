"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkycloudExpanse extends UnimplementedCard {
  constructor (game) {
    super(game, "Skycloud Expanse", "World Championship Decks 2003", "WC03");
  }
}

module.exports = SkycloudExpanse;
