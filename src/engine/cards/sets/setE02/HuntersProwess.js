"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntersProwess extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunter's Prowess", "Explorers of Ixalan", "E02");
  }
}

module.exports = HuntersProwess;
