"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeatheredWayfarer extends UnimplementedCard {
  constructor (game) {
    super(game, "Weathered Wayfarer", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = WeatheredWayfarer;
