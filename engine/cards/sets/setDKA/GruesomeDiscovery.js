"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GruesomeDiscovery extends Card {
  constructor(game) {
    super(game, "Gruesome Discovery", "Dark Ascension", "DKA");
  }
}

module.exports = GruesomeDiscovery;
