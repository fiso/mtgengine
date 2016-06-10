"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulsAttendant extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul's Attendant", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SoulsAttendant;
