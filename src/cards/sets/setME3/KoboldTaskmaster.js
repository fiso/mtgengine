"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KoboldTaskmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Kobold Taskmaster", "Masters Edition III", "ME3");
  }
}

module.exports = KoboldTaskmaster;
