"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FalkenrathMarauders extends Card {
  constructor(game) {
    super(game, "Falkenrath Marauders", "Innistrad", "ISD");
  }
}

module.exports = FalkenrathMarauders;
