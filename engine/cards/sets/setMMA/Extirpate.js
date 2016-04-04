"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Extirpate extends Card {
  constructor(game) {
    super(game, "Extirpate", "Modern Masters", "MMA");
  }
}

module.exports = Extirpate;
