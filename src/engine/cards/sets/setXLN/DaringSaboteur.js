"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaringSaboteur extends UnimplementedCard {
  constructor (game) {
    super(game, "Daring Saboteur", "Ixalan", "XLN");
  }
}

module.exports = DaringSaboteur;
