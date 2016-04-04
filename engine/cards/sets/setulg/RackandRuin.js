"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RackandRuin extends Card {
  constructor(game) {
    super(game, "Rack and Ruin", "Urza's Legacy", "ULG");
  }
}

module.exports = RackandRuin;
