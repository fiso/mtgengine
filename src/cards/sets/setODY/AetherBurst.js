"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherBurst extends UnimplementedCard {
  constructor(game) {
    super(game, "Æther Burst", "Odyssey", "ODY");
  }
}

module.exports = AetherBurst;
