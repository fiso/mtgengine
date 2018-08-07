"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RogueKavu extends UnimplementedCard {
  constructor (game) {
    super(game, "Rogue Kavu", "Ninth Edition", "9ED");
  }
}

module.exports = RogueKavu;
