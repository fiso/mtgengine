"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HinterlandLogger extends UnimplementedCard {
  constructor (game) {
    super(game, "Hinterland Logger", "Shadows over Innistrad", "SOI");
  }
}

module.exports = HinterlandLogger;
