"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LifeChisel extends UnimplementedCard {
  constructor(game) {
    super(game, "Life Chisel", "Legends", "LEG");
  }
}

module.exports = LifeChisel;
