"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HumblerofMortals extends Card {
  constructor(game) {
    super(game, "Humbler of Mortals", "Journey into Nyx", "JOU");
  }
}

module.exports = HumblerofMortals;
