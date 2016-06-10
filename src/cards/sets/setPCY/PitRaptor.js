"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PitRaptor extends UnimplementedCard {
  constructor (game) {
    super(game, "Pit Raptor", "Prophecy", "PCY");
  }
}

module.exports = PitRaptor;
