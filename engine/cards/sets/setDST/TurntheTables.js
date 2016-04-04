"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TurntheTables extends Card {
  constructor(game) {
    super(game, "Turn the Tables", "Darksteel", "DST");
  }
}

module.exports = TurntheTables;
