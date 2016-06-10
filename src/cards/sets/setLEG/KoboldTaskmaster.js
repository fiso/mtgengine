"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KoboldTaskmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Kobold Taskmaster", "Legends", "LEG");
  }
}

module.exports = KoboldTaskmaster;
