"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Soulstinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Soulstinger", "Amonkhet", "AKH");
  }
}

module.exports = Soulstinger;
