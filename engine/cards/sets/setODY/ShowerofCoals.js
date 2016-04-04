"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShowerofCoals extends Card {
  constructor(game) {
    super(game, "Shower of Coals", "Odyssey", "ODY");
  }
}

module.exports = ShowerofCoals;
