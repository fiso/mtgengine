"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulSnare extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Snare", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SoulSnare;
