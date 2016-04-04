"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KjeldoranJavelineer extends Card {
  constructor(game) {
    super(game, "Kjeldoran Javelineer", "Coldsnap", "CSP");
  }
}

module.exports = KjeldoranJavelineer;
