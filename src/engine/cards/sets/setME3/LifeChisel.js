"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LifeChisel extends UnimplementedCard {
  constructor (game) {
    super(game, "Life Chisel", "Masters Edition III", "ME3");
  }
}

module.exports = LifeChisel;
