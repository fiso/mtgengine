"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BelltollDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Belltoll Dragon", "Dragons of Tarkir", "DTK");
  }
}

module.exports = BelltollDragon;
