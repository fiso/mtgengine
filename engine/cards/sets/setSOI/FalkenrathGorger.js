"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalkenrathGorger extends UnimplementedCard {
  constructor(game) {
    super(game, "Falkenrath Gorger", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FalkenrathGorger;
