"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SquadronHawk extends UnimplementedCard {
  constructor (game) {
    super(game, "Squadron Hawk", "Masters 25", "A25");
  }
}

module.exports = SquadronHawk;
