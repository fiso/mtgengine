"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LunkErrant extends UnimplementedCard {
  constructor (game) {
    super(game, "Lunk Errant", "Morningtide", "MOR");
  }
}

module.exports = LunkErrant;
