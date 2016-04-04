"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SharedDiscovery extends Card {
  constructor(game) {
    super(game, "Shared Discovery", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SharedDiscovery;
