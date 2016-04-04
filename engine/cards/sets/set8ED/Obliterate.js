"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Obliterate extends Card {
  constructor(game) {
    super(game, "Obliterate", "Eighth Edition", "8ED");
  }
}

module.exports = Obliterate;
