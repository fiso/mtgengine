"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormFleetSpy extends UnimplementedCard {
  constructor (game) {
    super(game, "Storm Fleet Spy", "Ixalan", "XLN");
  }
}

module.exports = StormFleetSpy;
