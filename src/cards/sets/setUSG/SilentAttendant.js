"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilentAttendant extends UnimplementedCard {
  constructor (game) {
    super(game, "Silent Attendant", "Urza's Saga", "USG");
  }
}

module.exports = SilentAttendant;
