"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProtomatterPowder extends Card {
  constructor(game) {
    super(game, "Protomatter Powder", "Shards of Alara", "ALA");
  }
}

module.exports = ProtomatterPowder;
