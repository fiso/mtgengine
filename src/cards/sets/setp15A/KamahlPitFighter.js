"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamahlPitFighter extends UnimplementedCard {
  constructor (game) {
    super(game, "Kamahl, Pit Fighter", "15th Anniversary", "p15A");
  }
}

module.exports = KamahlPitFighter;
