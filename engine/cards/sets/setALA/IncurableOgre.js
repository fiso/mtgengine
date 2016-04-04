"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IncurableOgre extends Card {
  constructor(game) {
    super(game, "Incurable Ogre", "Shards of Alara", "ALA");
  }
}

module.exports = IncurableOgre;
