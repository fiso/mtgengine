"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BubblingMuck extends UnimplementedCard {
  constructor (game) {
    super(game, "Bubbling Muck", "Urza's Destiny", "UDS");
  }
}

module.exports = BubblingMuck;
