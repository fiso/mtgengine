"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Downpour extends Card {
  constructor(game) {
    super(game, "Downpour", "Magic 2013", "M13");
  }
}

module.exports = Downpour;
