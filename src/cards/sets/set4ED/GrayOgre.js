"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrayOgre extends UnimplementedCard {
  constructor (game) {
    super(game, "Gray Ogre", "Fourth Edition", "4ED");
  }
}

module.exports = GrayOgre;
