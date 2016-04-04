"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoodlandChangeling extends Card {
  constructor(game) {
    super(game, "Woodland Changeling", "Lorwyn", "LRW");
  }
}

module.exports = WoodlandChangeling;
