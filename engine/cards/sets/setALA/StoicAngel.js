"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoicAngel extends Card {
  constructor(game) {
    super(game, "Stoic Angel", "Shards of Alara", "ALA");
  }
}

module.exports = StoicAngel;
