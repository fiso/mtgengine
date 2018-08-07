"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WorkshopAssistant extends UnimplementedCard {
  constructor (game) {
    super(game, "Workshop Assistant", "Kaladesh", "KLD");
  }
}

module.exports = WorkshopAssistant;
