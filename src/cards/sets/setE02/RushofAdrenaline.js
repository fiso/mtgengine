"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RushofAdrenaline extends UnimplementedCard {
  constructor (game) {
    super(game, "Rush of Adrenaline", "Explorers of Ixalan", "E02");
  }
}

module.exports = RushofAdrenaline;
