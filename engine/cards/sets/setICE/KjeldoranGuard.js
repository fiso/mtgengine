"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KjeldoranGuard extends Card {
  constructor(game) {
    super(game, "Kjeldoran Guard", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranGuard;
