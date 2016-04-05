"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thunderstaff extends UnimplementedCard {
  constructor(game) {
    super(game, "Thunderstaff", "Archenemy", "ARC");
  }
}

module.exports = Thunderstaff;
