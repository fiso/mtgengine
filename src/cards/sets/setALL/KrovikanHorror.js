"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrovikanHorror extends UnimplementedCard {
  constructor (game) {
    super(game, "Krovikan Horror", "Alliances", "ALL");
  }
}

module.exports = KrovikanHorror;
