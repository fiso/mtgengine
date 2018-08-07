"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwordofVengeance extends UnimplementedCard {
  constructor (game) {
    super(game, "Sword of Vengeance", "Commander 2017", "C17");
  }
}

module.exports = SwordofVengeance;
