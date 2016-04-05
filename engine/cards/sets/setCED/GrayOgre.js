"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrayOgre extends UnimplementedCard {
  constructor(game) {
    super(game, "Gray Ogre", "Collector's Edition", "CED");
  }
}

module.exports = GrayOgre;
