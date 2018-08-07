"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireLitThicket extends UnimplementedCard {
  constructor (game) {
    super(game, "Fire-Lit Thicket", "Zendikar Expeditions", "EXP");
  }
}

module.exports = FireLitThicket;
