"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Throttle extends UnimplementedCard {
  constructor (game) {
    super(game, "Throttle", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Throttle;
