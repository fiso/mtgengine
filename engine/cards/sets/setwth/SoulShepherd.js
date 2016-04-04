"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulShepherd extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Shepherd", "Weatherlight", "WTH");
  }
}

module.exports = SoulShepherd;
