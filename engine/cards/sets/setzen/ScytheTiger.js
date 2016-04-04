"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScytheTiger extends Card {
  constructor(game) {
    super(game, "Scythe Tiger", "Zendikar", "ZEN");
  }
}

module.exports = ScytheTiger;
