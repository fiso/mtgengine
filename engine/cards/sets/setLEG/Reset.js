"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reset extends Card {
  constructor(game) {
    super(game, "Reset", "Legends", "LEG");
  }
}

module.exports = Reset;
