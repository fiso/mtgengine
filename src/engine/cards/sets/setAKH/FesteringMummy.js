"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FesteringMummy extends UnimplementedCard {
  constructor (game) {
    super(game, "Festering Mummy", "Amonkhet", "AKH");
  }
}

module.exports = FesteringMummy;
