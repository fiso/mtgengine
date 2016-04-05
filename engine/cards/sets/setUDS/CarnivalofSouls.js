"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarnivalofSouls extends UnimplementedCard {
  constructor(game) {
    super(game, "Carnival of Souls", "Urza's Destiny", "UDS");
  }
}

module.exports = CarnivalofSouls;
