"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurseofVengeance extends UnimplementedCard {
  constructor (game) {
    super(game, "Curse of Vengeance", "You Make the Cube", "PZ2");
  }
}

module.exports = CurseofVengeance;
