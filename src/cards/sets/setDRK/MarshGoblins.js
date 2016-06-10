"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshGoblins extends UnimplementedCard {
  constructor (game) {
    super(game, "Marsh Goblins", "The Dark", "DRK");
  }
}

module.exports = MarshGoblins;
