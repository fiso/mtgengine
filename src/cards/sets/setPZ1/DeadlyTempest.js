"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadlyTempest extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadly Tempest", "Legendary Cube", "PZ1");
  }
}

module.exports = DeadlyTempest;
