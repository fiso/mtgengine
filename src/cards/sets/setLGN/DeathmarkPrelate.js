"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathmarkPrelate extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathmark Prelate", "Legions", "LGN");
  }
}

module.exports = DeathmarkPrelate;
