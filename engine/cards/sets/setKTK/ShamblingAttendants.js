"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShamblingAttendants extends Card {
  constructor(game) {
    super(game, "Shambling Attendants", "Khans of Tarkir", "KTK");
  }
}

module.exports = ShamblingAttendants;
