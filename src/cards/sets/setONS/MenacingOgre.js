"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MenacingOgre extends UnimplementedCard {
  constructor (game) {
    super(game, "Menacing Ogre", "Onslaught", "ONS");
  }
}

module.exports = MenacingOgre;
