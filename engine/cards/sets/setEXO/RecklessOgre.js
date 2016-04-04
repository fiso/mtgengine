"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessOgre extends UnimplementedCard {
  constructor(game) {
    super(game, "Reckless Ogre", "Exodus", "EXO");
  }
}

module.exports = RecklessOgre;
