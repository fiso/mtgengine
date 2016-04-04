"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MightyEmergence extends Card {
  constructor(game) {
    super(game, "Mighty Emergence", "Shards of Alara", "ALA");
  }
}

module.exports = MightyEmergence;
