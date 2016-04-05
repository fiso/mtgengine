"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalkenrathMarauders extends UnimplementedCard {
  constructor(game) {
    super(game, "Falkenrath Marauders", "Innistrad", "ISD");
  }
}

module.exports = FalkenrathMarauders;
