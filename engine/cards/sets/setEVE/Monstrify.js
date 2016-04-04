"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Monstrify extends Card {
  constructor(game) {
    super(game, "Monstrify", "Eventide", "EVE");
  }
}

module.exports = Monstrify;
