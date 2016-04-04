"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DenyingWind extends Card {
  constructor(game) {
    super(game, "Denying Wind", "Prophecy", "PCY");
  }
}

module.exports = DenyingWind;
