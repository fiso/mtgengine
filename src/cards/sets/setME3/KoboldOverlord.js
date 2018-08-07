"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KoboldOverlord extends UnimplementedCard {
  constructor (game) {
    super(game, "Kobold Overlord", "Masters Edition III", "ME3");
  }
}

module.exports = KoboldOverlord;
