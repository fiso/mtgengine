"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SquallDrifter extends Card {
  constructor(game) {
    super(game, "Squall Drifter", "Coldsnap", "CSP");
  }
}

module.exports = SquallDrifter;
