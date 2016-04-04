"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulsAttendant extends Card {
  constructor(game) {
    super(game, "Soul's Attendant", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SoulsAttendant;
