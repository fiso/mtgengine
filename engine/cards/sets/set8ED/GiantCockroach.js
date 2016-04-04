"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantCockroach extends Card {
  constructor(game) {
    super(game, "Giant Cockroach", "Eighth Edition", "8ED");
  }
}

module.exports = GiantCockroach;
