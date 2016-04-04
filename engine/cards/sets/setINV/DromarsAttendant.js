"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DromarsAttendant extends Card {
  constructor(game) {
    super(game, "Dromar's Attendant", "Invasion", "INV");
  }
}

module.exports = DromarsAttendant;
