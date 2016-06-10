"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JungleWeaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Jungle Weaver", "Shards of Alara", "ALA");
  }
}

module.exports = JungleWeaver;
