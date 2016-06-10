"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Provoke extends UnimplementedCard {
  constructor (game) {
    super(game, "Provoke", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Provoke;
