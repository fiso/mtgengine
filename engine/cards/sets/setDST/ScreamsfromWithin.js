"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScreamsfromWithin extends Card {
  constructor(game) {
    super(game, "Screams from Within", "Darksteel", "DST");
  }
}

module.exports = ScreamsfromWithin;
