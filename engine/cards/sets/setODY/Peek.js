"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Peek extends Card {
  constructor(game) {
    super(game, "Peek", "Odyssey", "ODY");
  }
}

module.exports = Peek;
