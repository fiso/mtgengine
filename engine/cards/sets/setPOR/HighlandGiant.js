"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HighlandGiant extends Card {
  constructor(game) {
    super(game, "Highland Giant", "Portal", "POR");
  }
}

module.exports = HighlandGiant;
