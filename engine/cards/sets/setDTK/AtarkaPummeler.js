"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AtarkaPummeler extends Card {
  constructor(game) {
    super(game, "Atarka Pummeler", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AtarkaPummeler;
