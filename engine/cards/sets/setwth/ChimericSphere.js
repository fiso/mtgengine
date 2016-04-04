"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChimericSphere extends Card {
  constructor(game) {
    super(game, "Chimeric Sphere", "Weatherlight", "WTH");
  }
}

module.exports = ChimericSphere;
