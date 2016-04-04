"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Nihilith extends Card {
  constructor(game) {
    super(game, "Nihilith", "Future Sight", "FUT");
  }
}

module.exports = Nihilith;
