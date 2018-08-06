"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalkenrathReaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Falkenrath Reaver", "Eldritch Moon", "EMN");
  }
}

module.exports = FalkenrathReaver;
