"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavaBurst extends UnimplementedCard {
  constructor (game) {
    super(game, "Lava Burst", "Masters Edition II", "ME2");
  }
}

module.exports = LavaBurst;
