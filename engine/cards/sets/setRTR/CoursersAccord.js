"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoursersAccord extends UnimplementedCard {
  constructor(game) {
    super(game, "Coursers' Accord", "Return to Ravnica", "RTR");
  }
}

module.exports = CoursersAccord;
