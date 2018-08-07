"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightofDay extends UnimplementedCard {
  constructor (game) {
    super(game, "Light of Day", "World Championship Decks 2000", "WC00");
  }
}

module.exports = LightofDay;
