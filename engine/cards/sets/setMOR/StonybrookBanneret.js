"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StonybrookBanneret extends Card {
  constructor(game) {
    super(game, "Stonybrook Banneret", "Morningtide", "MOR");
  }
}

module.exports = StonybrookBanneret;
