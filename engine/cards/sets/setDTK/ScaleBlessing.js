"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScaleBlessing extends Card {
  constructor(game) {
    super(game, "Scale Blessing", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ScaleBlessing;
