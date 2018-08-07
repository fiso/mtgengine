"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TsabosWeb extends UnimplementedCard {
  constructor (game) {
    super(game, "Tsabo's Web", "World Championship Decks 2001", "WC01");
  }
}

module.exports = TsabosWeb;
