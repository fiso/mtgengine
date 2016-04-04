"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SigilofDistinction extends Card {
  constructor(game) {
    super(game, "Sigil of Distinction", "Shards of Alara", "ALA");
  }
}

module.exports = SigilofDistinction;
