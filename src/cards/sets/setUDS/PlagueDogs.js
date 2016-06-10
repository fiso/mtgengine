"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueDogs extends UnimplementedCard {
  constructor (game) {
    super(game, "Plague Dogs", "Urza's Destiny", "UDS");
  }
}

module.exports = PlagueDogs;
