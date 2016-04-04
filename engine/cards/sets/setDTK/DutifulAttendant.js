"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DutifulAttendant extends UnimplementedCard {
  constructor(game) {
    super(game, "Dutiful Attendant", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DutifulAttendant;
