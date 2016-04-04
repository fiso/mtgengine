"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HulkingOgre extends Card {
  constructor(game) {
    super(game, "Hulking Ogre", "Starter 1999", "S99");
  }
}

module.exports = HulkingOgre;
