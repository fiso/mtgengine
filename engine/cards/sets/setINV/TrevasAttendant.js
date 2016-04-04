"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrevasAttendant extends Card {
  constructor(game) {
    super(game, "Treva's Attendant", "Invasion", "INV");
  }
}

module.exports = TrevasAttendant;
