"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CogworkSpy extends UnimplementedCard {
  constructor (game) {
    super(game, "Cogwork Spy", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CogworkSpy;
