"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelsGrace extends Card {
  constructor(game) {
    super(game, "Angel's Grace", "Modern Masters", "MMA");
  }
}

module.exports = AngelsGrace;
