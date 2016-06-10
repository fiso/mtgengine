"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZephidsEmbrace extends UnimplementedCard {
  constructor (game) {
    super(game, "Zephid's Embrace", "Urza's Saga", "USG");
  }
}

module.exports = ZephidsEmbrace;
