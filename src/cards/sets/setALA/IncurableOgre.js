"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncurableOgre extends UnimplementedCard {
  constructor(game) {
    super(game, "Incurable Ogre", "Shards of Alara", "ALA");
  }
}

module.exports = IncurableOgre;
