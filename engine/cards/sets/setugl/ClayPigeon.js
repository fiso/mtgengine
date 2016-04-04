"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClayPigeon extends Card {
  constructor(game) {
    super(game, "Clay Pigeon", "Unglued", "UGL");
  }
}

module.exports = ClayPigeon;
