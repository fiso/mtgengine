"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrostOgre extends UnimplementedCard {
  constructor(game) {
    super(game, "Frost Ogre", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = FrostOgre;
