"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vermiculos extends Card {
  constructor(game) {
    super(game, "Vermiculos", "Mirrodin", "MRD");
  }
}

module.exports = Vermiculos;
