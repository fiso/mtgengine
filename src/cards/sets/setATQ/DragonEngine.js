"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonEngine extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Engine", "Antiquities", "ATQ");
  }
}

module.exports = DragonEngine;
