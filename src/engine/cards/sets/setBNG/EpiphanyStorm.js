"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EpiphanyStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Epiphany Storm", "Born of the Gods", "BNG");
  }
}

module.exports = EpiphanyStorm;
