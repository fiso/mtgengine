"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Flaccify extends Card {
  constructor(game) {
    super(game, "Flaccify", "Unhinged", "UNH");
  }
}

module.exports = Flaccify;
