"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MistformMask extends Card {
  constructor(game) {
    super(game, "Mistform Mask", "Onslaught", "ONS");
  }
}

module.exports = MistformMask;
