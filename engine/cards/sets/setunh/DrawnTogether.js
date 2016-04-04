"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrawnTogether extends Card {
  constructor(game) {
    super(game, "Drawn Together", "Unhinged", "UNH");
  }
}

module.exports = DrawnTogether;
