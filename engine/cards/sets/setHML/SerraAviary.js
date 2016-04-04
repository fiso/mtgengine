"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerraAviary extends Card {
  constructor(game) {
    super(game, "Serra Aviary", "Homelands", "HML");
  }
}

module.exports = SerraAviary;
