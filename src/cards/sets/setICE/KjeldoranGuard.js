"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Guard", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranGuard;
