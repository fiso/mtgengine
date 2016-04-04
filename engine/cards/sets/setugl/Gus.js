"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gus extends Card {
  constructor(game) {
    super(game, "Gus", "Unglued", "UGL");
  }
}

module.exports = Gus;
