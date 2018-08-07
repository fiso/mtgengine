"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaureanMauler extends UnimplementedCard {
  constructor (game) {
    super(game, "Taurean Mauler", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = TaureanMauler;
