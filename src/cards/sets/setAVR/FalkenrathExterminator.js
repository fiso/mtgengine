"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalkenrathExterminator extends UnimplementedCard {
  constructor(game) {
    super(game, "Falkenrath Exterminator", "Avacyn Restored", "AVR");
  }
}

module.exports = FalkenrathExterminator;
