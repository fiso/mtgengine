"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StudentofWarfare extends Card {
  constructor(game) {
    super(game, "Student of Warfare", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = StudentofWarfare;
