"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StudentofWarfare extends UnimplementedCard {
  constructor (game) {
    super(game, "Student of Warfare", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = StudentofWarfare;
