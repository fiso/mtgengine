"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VanishintoMemory extends Card {
  constructor(game) {
    super(game, "Vanish into Memory", "Coldsnap", "CSP");
  }
}

module.exports = VanishintoMemory;
