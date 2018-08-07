"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefiantFalcon extends UnimplementedCard {
  constructor (game) {
    super(game, "Defiant Falcon", "Nemesis", "NEM");
  }
}

module.exports = DefiantFalcon;
