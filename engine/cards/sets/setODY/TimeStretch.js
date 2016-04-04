"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimeStretch extends Card {
  constructor(game) {
    super(game, "Time Stretch", "Odyssey", "ODY");
  }
}

module.exports = TimeStretch;
