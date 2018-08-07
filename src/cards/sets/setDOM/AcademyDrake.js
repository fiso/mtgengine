"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcademyDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Academy Drake", "Dominaria", "DOM");
  }
}

module.exports = AcademyDrake;
