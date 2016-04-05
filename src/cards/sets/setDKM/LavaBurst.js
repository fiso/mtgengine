"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavaBurst extends UnimplementedCard {
  constructor(game) {
    super(game, "Lava Burst", "Deckmasters", "DKM");
  }
}

module.exports = LavaBurst;
