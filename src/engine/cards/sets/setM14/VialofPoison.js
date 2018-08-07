"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VialofPoison extends UnimplementedCard {
  constructor (game) {
    super(game, "Vial of Poison", "Magic 2014", "M14");
  }
}

module.exports = VialofPoison;
