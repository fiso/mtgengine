"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrzasPowerPlant extends Card {
  constructor(game) {
    super(game, "Urza's Power Plant", "Antiquities", "ATQ");
  }
}

module.exports = UrzasPowerPlant;
