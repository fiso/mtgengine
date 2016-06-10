"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MuscleBurst extends UnimplementedCard {
  constructor (game) {
    super(game, "Muscle Burst", "Odyssey", "ODY");
  }
}

module.exports = MuscleBurst;
