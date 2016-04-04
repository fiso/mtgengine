"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrovikanMist extends Card {
  constructor(game) {
    super(game, "Krovikan Mist", "Coldsnap", "CSP");
  }
}

module.exports = KrovikanMist;
