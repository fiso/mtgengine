"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranOutrider extends UnimplementedCard {
  constructor(game) {
    super(game, "Kjeldoran Outrider", "Coldsnap", "CSP");
  }
}

module.exports = KjeldoranOutrider;
