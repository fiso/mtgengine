"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DromarsCavern extends Card {
  constructor(game) {
    super(game, "Dromar's Cavern", "Planeshift", "PLS");
  }
}

module.exports = DromarsCavern;
