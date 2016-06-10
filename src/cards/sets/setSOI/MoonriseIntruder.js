"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoonriseIntruder extends UnimplementedCard {
  constructor (game) {
    super(game, "Moonrise Intruder", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MoonriseIntruder;
