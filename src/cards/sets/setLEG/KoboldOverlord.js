"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KoboldOverlord extends UnimplementedCard {
  constructor (game) {
    super(game, "Kobold Overlord", "Legends", "LEG");
  }
}

module.exports = KoboldOverlord;
