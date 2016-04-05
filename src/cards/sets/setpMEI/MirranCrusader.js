"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirranCrusader extends UnimplementedCard {
  constructor(game) {
    super(game, "Mirran Crusader", "Media Inserts", "pMEI");
  }
}

module.exports = MirranCrusader;
