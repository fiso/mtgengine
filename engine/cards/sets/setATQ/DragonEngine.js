"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonEngine extends Card {
  constructor(game) {
    super(game, "Dragon Engine", "Antiquities", "ATQ");
  }
}

module.exports = DragonEngine;
