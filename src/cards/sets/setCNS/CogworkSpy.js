"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CogworkSpy extends UnimplementedCard {
  constructor (game) {
    super(game, "Cogwork Spy", "Conspiracy", "CNS");
  }
}

module.exports = CogworkSpy;
