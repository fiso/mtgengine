"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcBlade extends Card {
  constructor(game) {
    super(game, "Arc Blade", "Future Sight", "FUT");
  }
}

module.exports = ArcBlade;
