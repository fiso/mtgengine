"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuinousGremlin extends UnimplementedCard {
  constructor (game) {
    super(game, "Ruinous Gremlin", "Kaladesh", "KLD");
  }
}

module.exports = RuinousGremlin;
