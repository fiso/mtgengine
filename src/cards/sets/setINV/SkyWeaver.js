"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyWeaver extends UnimplementedCard {
  constructor(game) {
    super(game, "Sky Weaver", "Invasion", "INV");
  }
}

module.exports = SkyWeaver;
