"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GorillaTitan extends Card {
  constructor(game) {
    super(game, "Gorilla Titan", "Odyssey", "ODY");
  }
}

module.exports = GorillaTitan;
