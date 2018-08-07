"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreatbowDoyen extends UnimplementedCard {
  constructor (game) {
    super(game, "Greatbow Doyen", "Morningtide", "MOR");
  }
}

module.exports = GreatbowDoyen;
