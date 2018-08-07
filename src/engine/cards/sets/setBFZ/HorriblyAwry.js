"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HorriblyAwry extends UnimplementedCard {
  constructor (game) {
    super(game, "Horribly Awry", "Battle for Zendikar", "BFZ");
  }
}

module.exports = HorriblyAwry;
