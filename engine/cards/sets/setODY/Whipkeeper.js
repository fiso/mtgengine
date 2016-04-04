"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Whipkeeper extends Card {
  constructor(game) {
    super(game, "Whipkeeper", "Odyssey", "ODY");
  }
}

module.exports = Whipkeeper;
