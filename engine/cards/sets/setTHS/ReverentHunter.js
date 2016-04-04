"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReverentHunter extends Card {
  constructor(game) {
    super(game, "Reverent Hunter", "Theros", "THS");
  }
}

module.exports = ReverentHunter;
