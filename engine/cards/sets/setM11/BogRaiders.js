"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BogRaiders extends Card {
  constructor(game) {
    super(game, "Bog Raiders", "Magic 2011", "M11");
  }
}

module.exports = BogRaiders;
