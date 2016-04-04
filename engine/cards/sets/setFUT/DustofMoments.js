"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DustofMoments extends Card {
  constructor(game) {
    super(game, "Dust of Moments", "Future Sight", "FUT");
  }
}

module.exports = DustofMoments;
