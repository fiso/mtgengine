"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BerserkersOnslaught extends UnimplementedCard {
  constructor(game) {
    super(game, "Berserkers' Onslaught", "Dragons of Tarkir", "DTK");
  }
}

module.exports = BerserkersOnslaught;
