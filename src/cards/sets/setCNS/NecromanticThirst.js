"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecromanticThirst extends UnimplementedCard {
  constructor (game) {
    super(game, "Necromantic Thirst", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = NecromanticThirst;
