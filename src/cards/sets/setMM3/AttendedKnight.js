"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AttendedKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Attended Knight", "Modern Masters 2017", "MM3");
  }
}

module.exports = AttendedKnight;
