"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireLitThicket extends UnimplementedCard {
  constructor(game) {
    super(game, "Fire-Lit Thicket", "Shadowmoor", "SHM");
  }
}

module.exports = FireLitThicket;
