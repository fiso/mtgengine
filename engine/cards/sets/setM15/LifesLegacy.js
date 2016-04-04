"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LifesLegacy extends Card {
  constructor(game) {
    super(game, "Life's Legacy", "Magic 2015 Core Set", "M15");
  }
}

module.exports = LifesLegacy;
