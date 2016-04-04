"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfernoElemental extends Card {
  constructor(game) {
    super(game, "Inferno Elemental", "Magic 2010", "M10");
  }
}

module.exports = InfernoElemental;
