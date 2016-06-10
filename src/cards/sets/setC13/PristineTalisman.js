"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PristineTalisman extends UnimplementedCard {
  constructor (game) {
    super(game, "Pristine Talisman", "Commander 2013 Edition", "C13");
  }
}

module.exports = PristineTalisman;
