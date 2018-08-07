"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PristineTalisman extends UnimplementedCard {
  constructor (game) {
    super(game, "Pristine Talisman", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = PristineTalisman;
