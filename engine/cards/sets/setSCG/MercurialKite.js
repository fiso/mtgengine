"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MercurialKite extends Card {
  constructor(game) {
    super(game, "Mercurial Kite", "Scourge", "SCG");
  }
}

module.exports = MercurialKite;
