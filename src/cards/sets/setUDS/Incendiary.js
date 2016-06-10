"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Incendiary extends UnimplementedCard {
  constructor (game) {
    super(game, "Incendiary", "Urza's Destiny", "UDS");
  }
}

module.exports = Incendiary;
