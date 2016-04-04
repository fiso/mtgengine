"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagmaPhoenix extends Card {
  constructor(game) {
    super(game, "Magma Phoenix", "Magic 2010", "M10");
  }
}

module.exports = MagmaPhoenix;
