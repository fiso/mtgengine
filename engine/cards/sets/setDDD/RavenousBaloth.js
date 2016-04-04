"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RavenousBalothBase = require("../setC13/RavenousBaloth.js");

class RavenousBaloth extends RavenousBalothBase {
  constructor(game) {
    super(game, "Ravenous Baloth", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = RavenousBaloth;
