"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlabarasCarpet extends UnimplementedCard {
  constructor (game) {
    super(game, "Al-abara's Carpet", "Masters Edition IV", "ME4");
  }
}

module.exports = AlabarasCarpet;
