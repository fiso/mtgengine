"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlisterBeetle extends Card {
  constructor(game) {
    super(game, "Blister Beetle", "Shards of Alara", "ALA");
  }
}

module.exports = BlisterBeetle;
