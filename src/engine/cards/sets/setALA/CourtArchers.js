"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CourtArchers extends UnimplementedCard {
  constructor (game) {
    super(game, "Court Archers", "Shards of Alara", "ALA");
  }
}

module.exports = CourtArchers;
