"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CloneLegion extends Card {
  constructor(game) {
    super(game, "Clone Legion", "Dragons of Tarkir", "DTK");
  }
}

module.exports = CloneLegion;
