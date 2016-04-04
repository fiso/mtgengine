"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarrowShards extends Card {
  constructor(game) {
    super(game, "Marrow Shards", "New Phyrexia", "NPH");
  }
}

module.exports = MarrowShards;
