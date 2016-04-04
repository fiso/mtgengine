"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Silence extends Card {
  constructor(game) {
    super(game, "Silence", "Magic 2010", "M10");
  }
}

module.exports = Silence;
