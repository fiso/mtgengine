"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AcceptableLosses extends Card {
  constructor(game) {
    super(game, "Acceptable Losses", "Odyssey", "ODY");
  }
}

module.exports = AcceptableLosses;
