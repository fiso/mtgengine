"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Discombobulate extends Card {
  constructor(game) {
    super(game, "Discombobulate", "Onslaught", "ONS");
  }
}

module.exports = Discombobulate;
