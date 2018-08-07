"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RisingWaters extends UnimplementedCard {
  constructor (game) {
    super(game, "Rising Waters", "World Championship Decks 2000", "WC00");
  }
}

module.exports = RisingWaters;
