"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flicker extends UnimplementedCard {
  constructor(game) {
    super(game, "Flicker", "Urza's Destiny", "UDS");
  }
}

module.exports = Flicker;
