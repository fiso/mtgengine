"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GremlinMine extends Card {
  constructor(game) {
    super(game, "Gremlin Mine", "New Phyrexia", "NPH");
  }
}

module.exports = GremlinMine;
