"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampiricEmbrace extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampiric Embrace", "Urza's Saga", "USG");
  }
}

module.exports = VampiricEmbrace;
