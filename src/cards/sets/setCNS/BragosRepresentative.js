"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BragosRepresentative extends UnimplementedCard {
  constructor (game) {
    super(game, "Brago's Representative", "Conspiracy", "CNS");
  }
}

module.exports = BragosRepresentative;
