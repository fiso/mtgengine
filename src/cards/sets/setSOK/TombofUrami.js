"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TombofUrami extends UnimplementedCard {
  constructor (game) {
    super(game, "Tomb of Urami", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = TombofUrami;
