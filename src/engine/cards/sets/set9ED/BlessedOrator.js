"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlessedOrator extends UnimplementedCard {
  constructor (game) {
    super(game, "Blessed Orator", "Ninth Edition", "9ED");
  }
}

module.exports = BlessedOrator;
