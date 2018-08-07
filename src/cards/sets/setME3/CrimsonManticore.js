"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrimsonManticore extends UnimplementedCard {
  constructor (game) {
    super(game, "Crimson Manticore", "Masters Edition III", "ME3");
  }
}

module.exports = CrimsonManticore;
