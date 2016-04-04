"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatharticAdept extends UnimplementedCard {
  constructor(game) {
    super(game, "Cathartic Adept", "Shards of Alara", "ALA");
  }
}

module.exports = CatharticAdept;
