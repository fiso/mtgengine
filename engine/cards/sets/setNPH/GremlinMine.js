"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GremlinMine extends UnimplementedCard {
  constructor(game) {
    super(game, "Gremlin Mine", "New Phyrexia", "NPH");
  }
}

module.exports = GremlinMine;
