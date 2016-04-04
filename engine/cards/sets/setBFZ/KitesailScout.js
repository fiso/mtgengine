"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KitesailScout extends Card {
  constructor(game) {
    super(game, "Kitesail Scout", "Battle for Zendikar", "BFZ");
  }
}

module.exports = KitesailScout;
