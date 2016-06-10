"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImmortalServitude extends UnimplementedCard {
  constructor (game) {
    super(game, "Immortal Servitude", "Gatecrash", "GTC");
  }
}

module.exports = ImmortalServitude;
