"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Thunderstaff extends Card {
  constructor(game) {
    super(game, "Thunderstaff", "Archenemy", "ARC");
  }
}

module.exports = Thunderstaff;
