"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RavenousDemon extends Card {
  constructor(game) {
    super(game, "Ravenous Demon", "Dark Ascension", "DKA");
  }
}

module.exports = RavenousDemon;
