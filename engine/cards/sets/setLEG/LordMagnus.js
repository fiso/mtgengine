"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LordMagnus extends UnimplementedCard {
  constructor(game) {
    super(game, "Lord Magnus", "Legends", "LEG");
  }
}

module.exports = LordMagnus;
