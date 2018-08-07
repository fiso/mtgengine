"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrovikanHorror extends UnimplementedCard {
  constructor (game) {
    super(game, "Krovikan Horror", "Masters Edition II", "ME2");
  }
}

module.exports = KrovikanHorror;
