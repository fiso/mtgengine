"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoskBanneret extends Card {
  constructor(game) {
    super(game, "Bosk Banneret", "Morningtide", "MOR");
  }
}

module.exports = BoskBanneret;
