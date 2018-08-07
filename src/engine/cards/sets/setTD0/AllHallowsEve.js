"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AllHallowsEve extends UnimplementedCard {
  constructor (game) {
    super(game, "All Hallow's Eve", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = AllHallowsEve;
