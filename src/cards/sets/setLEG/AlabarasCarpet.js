"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlabarasCarpet extends UnimplementedCard {
  constructor (game) {
    super(game, "Al-abara's Carpet", "Legends", "LEG");
  }
}

module.exports = AlabarasCarpet;
