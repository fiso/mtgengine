"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KjeldoranWarCry extends Card {
  constructor(game) {
    super(game, "Kjeldoran War Cry", "Coldsnap", "CSP");
  }
}

module.exports = KjeldoranWarCry;
