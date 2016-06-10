"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HailStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Hail Storm", "Alliances", "ALL");
  }
}

module.exports = HailStorm;
