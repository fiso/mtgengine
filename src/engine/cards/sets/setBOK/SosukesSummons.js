"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SosukesSummons extends UnimplementedCard {
  constructor (game) {
    super(game, "Sosuke's Summons", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SosukesSummons;
