"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherRift extends UnimplementedCard {
  constructor(game) {
    super(game, "Æther Rift", "Invasion", "INV");
  }
}

module.exports = AetherRift;
