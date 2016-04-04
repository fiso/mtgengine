"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpringingTiger extends Card {
  constructor(game) {
    super(game, "Springing Tiger", "Odyssey", "ODY");
  }
}

module.exports = SpringingTiger;
