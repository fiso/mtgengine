"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ephemeron extends Card {
  constructor(game) {
    super(game, "Ephemeron", "Exodus", "EXO");
  }
}

module.exports = Ephemeron;
