"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AugurilVec extends Card {
  constructor(game) {
    super(game, "Augur il-Vec", "Future Sight", "FUT");
  }
}

module.exports = AugurilVec;
