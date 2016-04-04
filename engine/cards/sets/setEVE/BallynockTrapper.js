"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BallynockTrapper extends Card {
  constructor(game) {
    super(game, "Ballynock Trapper", "Eventide", "EVE");
  }
}

module.exports = BallynockTrapper;
