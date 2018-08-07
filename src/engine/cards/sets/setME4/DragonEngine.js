"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonEngine extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Engine", "Masters Edition IV", "ME4");
  }
}

module.exports = DragonEngine;
