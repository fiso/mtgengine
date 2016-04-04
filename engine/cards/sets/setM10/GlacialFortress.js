"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlacialFortress extends Card {
  constructor(game) {
    super(game, "Glacial Fortress", "Magic 2010", "M10");
  }
}

module.exports = GlacialFortress;
