"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KjeldoranKnight extends Card {
  constructor(game) {
    super(game, "Kjeldoran Knight", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranKnight;
