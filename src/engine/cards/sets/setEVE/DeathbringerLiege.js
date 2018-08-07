"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathbringerLiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathbringer Liege", "Eventide", "EVE");
  }
}

module.exports = DeathbringerLiege;
