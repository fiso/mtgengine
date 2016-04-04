"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvatarofWoe extends Card {
  constructor(game) {
    super(game, "Avatar of Woe", "Archenemy", "ARC");
  }
}

module.exports = AvatarofWoe;
