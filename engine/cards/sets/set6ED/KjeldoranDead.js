"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KjeldoranDead extends Card {
  constructor(game) {
    super(game, "Kjeldoran Dead", "Classic Sixth Edition", "6ED");
  }
}

module.exports = KjeldoranDead;
