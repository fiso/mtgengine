"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JungleLion extends UnimplementedCard {
  constructor (game) {
    super(game, "Jungle Lion", "Masters Edition III", "ME3");
  }
}

module.exports = JungleLion;
