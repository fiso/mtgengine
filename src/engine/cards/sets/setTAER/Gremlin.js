"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gremlin extends UnimplementedCard {
  constructor (game) {
    super(game, "Gremlin", "Aether Revolt Tokens", "TAER");
  }
}

module.exports = Gremlin;
