"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fleshwrither extends Card {
  constructor(game) {
    super(game, "Fleshwrither", "Future Sight", "FUT");
  }
}

module.exports = Fleshwrither;
