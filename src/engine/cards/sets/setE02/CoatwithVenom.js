"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoatwithVenom extends UnimplementedCard {
  constructor (game) {
    super(game, "Coat with Venom", "Explorers of Ixalan", "E02");
  }
}

module.exports = CoatwithVenom;
