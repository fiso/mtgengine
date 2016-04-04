"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LatNamsLegacy extends Card {
  constructor(game) {
    super(game, "Lat-Nam's Legacy", "Alliances", "ALL");
  }
}

module.exports = LatNamsLegacy;
