"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrzasTower extends Card {
  constructor(game) {
    super(game, "Urza's Tower", "Antiquities", "ATQ");
  }
}

module.exports = UrzasTower;
