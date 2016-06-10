"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DackFayden extends UnimplementedCard {
  constructor (game) {
    super(game, "Dack Fayden", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = DackFayden;
