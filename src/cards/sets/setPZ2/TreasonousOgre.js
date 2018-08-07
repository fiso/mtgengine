"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreasonousOgre extends UnimplementedCard {
  constructor (game) {
    super(game, "Treasonous Ogre", "You Make the Cube", "PZ2");
  }
}

module.exports = TreasonousOgre;
