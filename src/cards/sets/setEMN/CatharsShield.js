"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatharsShield extends UnimplementedCard {
  constructor (game) {
    super(game, "Cathar's Shield", "Eldritch Moon", "EMN");
  }
}

module.exports = CatharsShield;
