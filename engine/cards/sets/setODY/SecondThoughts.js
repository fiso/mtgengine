"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SecondThoughts extends Card {
  constructor(game) {
    super(game, "Second Thoughts", "Odyssey", "ODY");
  }
}

module.exports = SecondThoughts;
