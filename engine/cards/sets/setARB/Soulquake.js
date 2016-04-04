"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Soulquake extends UnimplementedCard {
  constructor(game) {
    super(game, "Soulquake", "Alara Reborn", "ARB");
  }
}

module.exports = Soulquake;
