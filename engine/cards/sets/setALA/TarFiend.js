"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TarFiend extends Card {
  constructor(game) {
    super(game, "Tar Fiend", "Shards of Alara", "ALA");
  }
}

module.exports = TarFiend;
