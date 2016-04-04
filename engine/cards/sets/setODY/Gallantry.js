"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gallantry extends Card {
  constructor(game) {
    super(game, "Gallantry", "Odyssey", "ODY");
  }
}

module.exports = Gallantry;
