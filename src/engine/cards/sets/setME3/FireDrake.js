"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Fire Drake", "Masters Edition III", "ME3");
  }
}

module.exports = FireDrake;
