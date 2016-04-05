"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrevasAttendant extends UnimplementedCard {
  constructor(game) {
    super(game, "Treva's Attendant", "Invasion", "INV");
  }
}

module.exports = TrevasAttendant;
