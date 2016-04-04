"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilentAttendant extends Card {
  constructor(game) {
    super(game, "Silent Attendant", "Urza's Saga", "USG");
  }
}

module.exports = SilentAttendant;
