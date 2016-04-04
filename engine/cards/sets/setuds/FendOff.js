"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FendOff extends UnimplementedCard {
  constructor(game) {
    super(game, "Fend Off", "Urza's Destiny", "UDS");
  }
}

module.exports = FendOff;
