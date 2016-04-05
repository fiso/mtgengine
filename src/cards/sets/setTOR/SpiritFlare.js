"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritFlare extends UnimplementedCard {
  constructor(game) {
    super(game, "Spirit Flare", "Torment", "TOR");
  }
}

module.exports = SpiritFlare;
