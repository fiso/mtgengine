"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KjeldoranHomeGuard extends Card {
  constructor(game) {
    super(game, "Kjeldoran Home Guard", "Alliances", "ALL");
  }
}

module.exports = KjeldoranHomeGuard;
