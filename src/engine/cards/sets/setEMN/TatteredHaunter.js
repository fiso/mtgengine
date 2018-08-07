"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TatteredHaunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Tattered Haunter", "Eldritch Moon", "EMN");
  }
}

module.exports = TatteredHaunter;
