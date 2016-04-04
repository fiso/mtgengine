"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GargoyleSentinel extends Card {
  constructor(game) {
    super(game, "Gargoyle Sentinel", "Magic 2011", "M11");
  }
}

module.exports = GargoyleSentinel;
