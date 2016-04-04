"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HauntingWind extends Card {
  constructor(game) {
    super(game, "Haunting Wind", "Antiquities", "ATQ");
  }
}

module.exports = HauntingWind;
