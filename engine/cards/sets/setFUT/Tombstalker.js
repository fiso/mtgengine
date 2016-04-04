"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tombstalker extends Card {
  constructor(game) {
    super(game, "Tombstalker", "Future Sight", "FUT");
  }
}

module.exports = Tombstalker;
