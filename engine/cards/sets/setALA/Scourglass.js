"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Scourglass extends Card {
  constructor(game) {
    super(game, "Scourglass", "Shards of Alara", "ALA");
  }
}

module.exports = Scourglass;
