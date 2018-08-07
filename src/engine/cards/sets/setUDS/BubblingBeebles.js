"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BubblingBeebles extends UnimplementedCard {
  constructor (game) {
    super(game, "Bubbling Beebles", "Urza's Destiny", "UDS");
  }
}

module.exports = BubblingBeebles;
