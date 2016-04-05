"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RageWeaver extends UnimplementedCard {
  constructor(game) {
    super(game, "Rage Weaver", "Invasion", "INV");
  }
}

module.exports = RageWeaver;
