"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoorlandHaunt extends Card {
  constructor(game) {
    super(game, "Moorland Haunt", "Innistrad", "ISD");
  }
}

module.exports = MoorlandHaunt;
