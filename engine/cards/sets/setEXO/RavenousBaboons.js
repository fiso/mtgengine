"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RavenousBaboons extends Card {
  constructor(game) {
    super(game, "Ravenous Baboons", "Exodus", "EXO");
  }
}

module.exports = RavenousBaboons;
