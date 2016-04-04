"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClamSession extends Card {
  constructor(game) {
    super(game, "Clam Session", "Unglued", "UGL");
  }
}

module.exports = ClamSession;
