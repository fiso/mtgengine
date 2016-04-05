"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PillarofWar extends UnimplementedCard {
  constructor(game) {
    super(game, "Pillar of War", "Born of the Gods", "BNG");
  }
}

module.exports = PillarofWar;
