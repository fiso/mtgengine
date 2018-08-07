"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaulfistSquad extends UnimplementedCard {
  constructor (game) {
    super(game, "Maulfist Squad", "Kaladesh", "KLD");
  }
}

module.exports = MaulfistSquad;
