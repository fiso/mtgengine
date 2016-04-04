"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SubterraneanScout extends Card {
  constructor(game) {
    super(game, "Subterranean Scout", "Magic Origins", "ORI");
  }
}

module.exports = SubterraneanScout;
