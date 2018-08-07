"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PreyUpon extends UnimplementedCard {
  constructor (game) {
    super(game, "Prey Upon", "Explorers of Ixalan", "E02");
  }
}

module.exports = PreyUpon;
