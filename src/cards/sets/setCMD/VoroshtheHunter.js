"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoroshtheHunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Vorosh, the Hunter", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VoroshtheHunter;
