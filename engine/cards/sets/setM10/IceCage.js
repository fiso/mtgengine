"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IceCage extends Card {
  constructor(game) {
    super(game, "Ice Cage", "Magic 2010", "M10");
  }
}

module.exports = IceCage;
