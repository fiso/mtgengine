"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TailSlash extends Card {
  constructor(game) {
    super(game, "Tail Slash", "Dragons of Tarkir", "DTK");
  }
}

module.exports = TailSlash;
