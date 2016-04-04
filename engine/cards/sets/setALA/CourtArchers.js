"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CourtArchers extends Card {
  constructor(game) {
    super(game, "Court Archers", "Shards of Alara", "ALA");
  }
}

module.exports = CourtArchers;
