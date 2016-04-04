"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvenPalisade extends Card {
  constructor(game) {
    super(game, "Elven Palisade", "Exodus", "EXO");
  }
}

module.exports = ElvenPalisade;
