"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HulkingOgre extends UnimplementedCard {
  constructor(game) {
    super(game, "Hulking Ogre", "Starter 1999", "S99");
  }
}

module.exports = HulkingOgre;
