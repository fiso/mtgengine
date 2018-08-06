"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SquadronHawk extends UnimplementedCard {
  constructor (game) {
    super(game, "Squadron Hawk", "Eternal Masters", "EMA");
  }
}

module.exports = SquadronHawk;
