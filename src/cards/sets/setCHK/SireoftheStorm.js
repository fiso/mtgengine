"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SireoftheStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Sire of the Storm", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SireoftheStorm;
