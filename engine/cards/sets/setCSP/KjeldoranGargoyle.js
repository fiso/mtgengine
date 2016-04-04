"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KjeldoranGargoyle extends Card {
  constructor(game) {
    super(game, "Kjeldoran Gargoyle", "Coldsnap", "CSP");
  }
}

module.exports = KjeldoranGargoyle;
