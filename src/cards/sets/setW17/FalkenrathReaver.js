"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalkenrathReaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Falkenrath Reaver", "Welcome Deck 2017", "W17");
  }
}

module.exports = FalkenrathReaver;
