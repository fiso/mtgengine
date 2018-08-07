"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ApocalypseChime extends UnimplementedCard {
  constructor (game) {
    super(game, "Apocalypse Chime", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = ApocalypseChime;
