"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LaquatussChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Laquatus's Champion", "Masters 25", "A25");
  }
}

module.exports = LaquatussChampion;
