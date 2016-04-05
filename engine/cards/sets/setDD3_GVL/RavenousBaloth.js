"use strict";
const Constants = require ("../../../Constants");
const RavenousBalothBase = require("../setC13/RavenousBaloth");

class RavenousBaloth extends RavenousBalothBase {
  constructor(game) {
    super(game, "Ravenous Baloth", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = RavenousBaloth;
