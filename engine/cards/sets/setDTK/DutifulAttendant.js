"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DutifulAttendant extends Card {
  constructor(game) {
    super(game, "Dutiful Attendant", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DutifulAttendant;
