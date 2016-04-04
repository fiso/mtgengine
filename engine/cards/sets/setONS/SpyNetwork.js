"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpyNetwork extends Card {
  constructor(game) {
    super(game, "Spy Network", "Onslaught", "ONS");
  }
}

module.exports = SpyNetwork;
