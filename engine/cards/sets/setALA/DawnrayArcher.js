"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DawnrayArcher extends Card {
  constructor(game) {
    super(game, "Dawnray Archer", "Shards of Alara", "ALA");
  }
}

module.exports = DawnrayArcher;
