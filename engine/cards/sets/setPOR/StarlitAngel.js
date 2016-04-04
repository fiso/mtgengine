"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StarlitAngel extends Card {
  constructor(game) {
    super(game, "Starlit Angel", "Portal", "POR");
  }
}

module.exports = StarlitAngel;
