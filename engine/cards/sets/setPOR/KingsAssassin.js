"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KingsAssassin extends UnimplementedCard {
  constructor(game) {
    super(game, "King's Assassin", "Portal", "POR");
  }
}

module.exports = KingsAssassin;
