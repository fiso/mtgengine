"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AttendedKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Attended Knight", "Magic 2013", "M13");
  }
}

module.exports = AttendedKnight;
