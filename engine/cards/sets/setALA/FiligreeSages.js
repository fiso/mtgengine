"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FiligreeSages extends Card {
  constructor(game) {
    super(game, "Filigree Sages", "Shards of Alara", "ALA");
  }
}

module.exports = FiligreeSages;
