"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoursersAccord extends Card {
  constructor(game) {
    super(game, "Coursers' Accord", "Return to Ravnica", "RTR");
  }
}

module.exports = CoursersAccord;
