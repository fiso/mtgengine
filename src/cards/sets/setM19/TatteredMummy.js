"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TatteredMummy extends UnimplementedCard {
  constructor (game) {
    super(game, "Tattered Mummy", "Core Set 2019", "M19");
  }
}

module.exports = TatteredMummy;
