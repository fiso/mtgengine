"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CenterSoul extends Card {
  constructor(game) {
    super(game, "Center Soul", "Dragons of Tarkir", "DTK");
  }
}

module.exports = CenterSoul;
