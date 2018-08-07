"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TsabosDecree extends UnimplementedCard {
  constructor (game) {
    super(game, "Tsabo's Decree", "World Championship Decks 2001", "WC01");
  }
}

module.exports = TsabosDecree;
