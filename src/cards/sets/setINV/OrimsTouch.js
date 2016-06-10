"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrimsTouch extends UnimplementedCard {
  constructor (game) {
    super(game, "Orim's Touch", "Invasion", "INV");
  }
}

module.exports = OrimsTouch;
