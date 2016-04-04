"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SquadronHawk extends UnimplementedCard {
  constructor(game) {
    super(game, "Squadron Hawk", "Friday Night Magic", "pFNM");
  }
}

module.exports = SquadronHawk;
