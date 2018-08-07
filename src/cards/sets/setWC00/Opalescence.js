"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Opalescence extends UnimplementedCard {
  constructor (game) {
    super(game, "Opalescence", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Opalescence;
