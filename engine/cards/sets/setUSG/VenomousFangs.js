"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VenomousFangs extends UnimplementedCard {
  constructor(game) {
    super(game, "Venomous Fangs", "Urza's Saga", "USG");
  }
}

module.exports = VenomousFangs;
