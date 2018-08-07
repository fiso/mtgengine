"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TyrantsFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Tyrant's Familiar", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = TyrantsFamiliar;
