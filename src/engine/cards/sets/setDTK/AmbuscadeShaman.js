"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmbuscadeShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Ambuscade Shaman", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AmbuscadeShaman;
