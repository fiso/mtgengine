"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ComaVeil extends UnimplementedCard {
  constructor(game) {
    super(game, "Coma Veil", "Shards of Alara", "ALA");
  }
}

module.exports = ComaVeil;
