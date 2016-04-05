"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GruulTurf extends UnimplementedCard {
  constructor(game) {
    super(game, "Gruul Turf", "Guildpact", "GPT");
  }
}

module.exports = GruulTurf;
