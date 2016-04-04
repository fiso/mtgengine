"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KjeldoranOutrider extends Card {
  constructor(game) {
    super(game, "Kjeldoran Outrider", "Coldsnap", "CSP");
  }
}

module.exports = KjeldoranOutrider;
