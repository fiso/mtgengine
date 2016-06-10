"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BragosRepresentative extends UnimplementedCard {
  constructor (game) {
    super(game, "Brago's Representative", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = BragosRepresentative;
