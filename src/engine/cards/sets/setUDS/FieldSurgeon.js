"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FieldSurgeon extends UnimplementedCard {
  constructor (game) {
    super(game, "Field Surgeon", "Urza's Destiny", "UDS");
  }
}

module.exports = FieldSurgeon;
