"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DregReaver extends UnimplementedCard {
  constructor(game) {
    super(game, "Dreg Reaver", "Shards of Alara", "ALA");
  }
}

module.exports = DregReaver;
