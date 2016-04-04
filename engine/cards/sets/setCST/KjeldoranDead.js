"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KjeldoranDeadBase = require("../set6ED/KjeldoranDead.js");

class KjeldoranDead extends KjeldoranDeadBase {
  constructor(game) {
    super(game, "Kjeldoran Dead", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = KjeldoranDead;
