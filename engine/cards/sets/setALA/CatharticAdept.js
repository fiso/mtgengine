"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CatharticAdept extends Card {
  constructor(game) {
    super(game, "Cathartic Adept", "Shards of Alara", "ALA");
  }
}

module.exports = CatharticAdept;
